const classMaker = require('../tools/classMaker_tool')
const diff_tool = require('../tools/diff_tool')
const exchanges_model = require('../model/exchanges_model')
let symbolsList = require('../config/symbolsList.json')

module.exports = {
    async init(req, res){
        
        let {symbol} = req.body
        let exchangeNames = new Array

        symbolsList = symbolsList.symbols
        let checkSymbol = symbolsList.includes(symbol)

        if(!checkSymbol) return res.json({body: "symbol_not_supported"})

        let exchangeObjects = await exchanges_model.findAll({raw: true})

        for(let obj  of exchangeObjects){
            exchangeNames.push(obj.name)
        }

        //creates an array with all prices
        let symbolsArray = new Array
        for(let exchangeName of exchangeNames){

            let exchangeObj  = await exchanges_model.findOne({ raw: true, where:{ name:exchangeName }})

            if(exchangeObj){
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
            
                    symbolsArray.push(symbolObject)
                }catch{
                    continue
                }

            }else{
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

        return res.json(sortedObjects)

    }
}


