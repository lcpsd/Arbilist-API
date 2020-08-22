const classMaker = require('../../tools/classMaker_tool')
const diff_tool = require('../../tools/diff_tool')
const {Op} = require('sequelize')

async function init(req, exchanges_model){

    let {symbol} = req.body
    let {btcQty} = req.body
    let exchangeNames = new Array

    let exchangeObjects = await exchanges_model.findAll({
        raw: true
    }, {
        where: {
            [Op.or] : [
                { userId: req.session.userId}, { userId: 1 }
            ]
        }
    })

    exchangeObjects.forEach(obj => exchangeNames.push(obj.name))

    //creates an array with all prices for every exchange in exchange objects
    let symbolsArray = new Array
    for(let exchangeName of exchangeNames){

        let exchangeObj = await exchanges_model.findOne({ 
            raw: true, 
                where: {
                    [Op.or] : [
                        { name:exchangeName, userId: req.session.userId }, { name:exchangeName, userId: 1 }
                    ]
                }
            })
        
        if(!exchangeObj) continue

        let symbolObject = new Object
        
        try{
            
            let exchange = classMaker(exchangeName, exchangeObj.apiKey, exchangeObj.secretKey)
            
            let lastPrice = await exchange.currentPrice(symbol)

            symbolObject = {
                symbol: symbol,
                currentPrice: lastPrice,
                exchange: exchangeName,
                coinsQty: parseFloat( parseFloat(  parseFloat(btcQty) / lastPrice ).toFixed(2))
            }

            symbolsArray.push(symbolObject)
        }catch(error) {continue}
            
    }
    
    //creates an array to sort prices in cresc values
    let arrayOfPrices = new Array

    for(let obj of symbolsArray){
        arrayOfPrices.push(obj.currentPrice)
    }
    
    arrayOfPrices = arrayOfPrices.sort()

    //find diff between most cheapest exchange and most expensive
    for(let i; i <= arrayOfPrices.length; i++){
        let valueDiff = diff_tool(arrayOfPrices[i], minorValue)
        valueDiff = parseFloat( ( valueDiff * 1000 ).toFixed(2) )

        symbolsArray.forEach(obj => obj.currentPrice == arrayOfPrices[i] ? obj.diff = valueDiff : null)

        i++

    }

    //sort objects and verify that's not duplicated on final array

    let sortedObjects = new Array
    arrayOfPrices.forEach(value => symbolsArray.forEach(obj => {
        let check = sortedObjects.some(objSorted => obj.exchange == objSorted.exchange)
        if(value == obj.currentPrice && !check && value != undefined) sortedObjects.push(obj) 
    }))

}

module.exports = init
