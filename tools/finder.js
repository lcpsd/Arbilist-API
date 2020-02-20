const classMaker = require('./classMaker')

async function init(symbol, btcQty, exchangeNames){
    
    for(let exchangeName of exchangeNames){
        let exchange = classMaker(exchangeName)

        let lastPrice = await exchange.currentPrice(symbol)
    }

}

module.exports = init