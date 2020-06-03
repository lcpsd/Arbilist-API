const classMaker = require('../../tools/classMaker_tool')
const diff_tool = require('../../tools/diff_tool')
const { Op } = require('sequelize')

async function init(req, exchanges_model){

    let {coin} = req.body
    let {btcQty} = req.body
    let exchangeNames = new Array

    coin += '/BTC'

    userId = req.session.userId

    let exchangeObjects = await exchanges_model.findAll({raw: true,
        where:{
            [Op.or]:[
                {userId: 1}, {userId}
            ]
        }})

    
    exchangeObjects = exchangeObjects.filter(result => result.userId == 1)
    
    console.log(exchangeObjects)
    process.exit()


    for(let obj  of exchangeObjects){
        exchangeNames.push(obj.name)
    }

    //creates an array with all prices for every exchange in exchange objects
    let symbolsArray = new Array
    for(let exchangeName of exchangeNames){

        let exchangeObj  = await exchanges_model.findOne({ 
            raw: true, 
            where:{ 
                name:exchangeName, userId: req.session.userId
            }})

        if(!exchangeObj) continue

        let symbolObject = new Object
            
        try{
            let exchange = classMaker(exchangeName, exchangeObj.apiKey, exchangeObj.secretKey)
            let lastPrice = await exchange.currentPrice(coin)

            symbolObject = {
                symbol: coin,
                currentPrice: lastPrice,
                exchange: exchangeName,
                coinsQty: parseFloat( parseFloat(  parseFloat(btcQty) / lastPrice ).toFixed(2))
            }

            symbolsArray.push(symbolObject)
        }catch{
            continue
        }
            
    }
    
    //creates an array to sort prices in cresc values
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