const classMaker = require('./classMaker')

async function init(symbol, btcQty, exchangeNames){
    
    let symbolsObject = new Array
    for(let exchangeName of exchangeNames){

        let symbolObject = new Object

        let exchange = classMaker(exchangeName)

        let lastPrice = await exchange.currentPrice(symbol)

        symbolObject["symbol"] = symbol
        symbolObject["currentPrice"] = lastPrice
        symbolObject["exchange"] = exchangeName

        symbolsObject.push(symbolObject)
    }

    console.log(symbolsObject)

}

module.exports = init