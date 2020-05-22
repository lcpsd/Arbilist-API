const classMaker = require('../../tools/classMaker_tool')
const diff_tool = require('../../tools/diff_tool')

async function init(req, exchanges_model){
    
    let {symbol} = req.body
    let {btcQty} = req.body
    let exchangeNames = new Array

    let exchangeObjects = await exchanges_model.findAll({raw: true}, {where: {userId: req.session.userId}})

    for(let obj  of exchangeObjects){
        exchangeNames.push(obj.name)
    }

    //creates an array with all prices
    let symbolsArray = new Array
    for(let exchangeName of exchangeNames){

        let exchangeObj  = await exchanges_model.findOne({ 
            raw: true, 
            where:{ 
                name:exchangeName, userId: req.session.diff 
            }})

        if(!exchangeObj) continue

        let symbolObject = new Object
            
        try{
            let exchange = classMaker(exchangeName, exchangeObj.apiKey, exchangeObj.secretKey)
            let lastPrice = await exchange.currentPrice(symbol)
            //let fees = await exchange.fees(symbol)

            symbolObject["symbol"] = symbol
            symbolObject["currentPrice"] = lastPrice
            symbolObject["exchange"] = exchangeName
            /* symbolObject["takerPercentage"] = fees.takerPercentage
            symbolObject["FeeQty"] = fees.symbolFeeQty */
            symbolObject["coinsQty"] = parseFloat(symbolObject.currentPrice) / parseFloat(btcQty)

            symbolsArray.push(symbolObject)
        }catch{
            continue
        }
            
    }
    
    let arrayOfPrices = new Array

    for(let obj of symbolsArray){
        arrayOfPrices.push(obj.currentPrice)
    }
    
    arrayOfPrices = arrayOfPrices.sort()

    //find diff between most cheapest exchange and most expensive
    let i = 1
    let minorValue = arrayOfPrices[0]
    while(i <= arrayOfPrices.length){
        let valueDiff = diff_tool(arrayOfPrices[i], minorValue)
        valueDiff = parseFloat( ( valueDiff * 1000 ).toFixed(2) )

        for(let obj of symbolsArray){
            if(obj.currentPrice == arrayOfPrices[i]){
                obj.diff = valueDiff
            }
        }

        i++

    }

    //sort objects
    let sortedObjects = new Array
    for(let value of arrayOfPrices){

        for(let obj of symbolsArray){

            if(value == obj.currentPrice){
                sortedObjects.push(obj)
            }

        }

    }

    return sortedObjects

}

module.exports = init