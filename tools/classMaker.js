const ccxt  = require('ccxt')
const credentials = require('../config/credentials.json')

function init(exchangeName){
    class exchangeClass{
        constructor(){

            let credential = credentials[exchangeName]

            this.exchangeCCXTclass = ccxt[exchangeName]
            this.client = new this.exchangeCCXTclass(credential)
        }

        async currentPrice(symbol){
            let result = await this.client.fetchTicker(symbol)
            result = result.info
            result = parseFloat( result.lastPrice )
            return result
        }

    }

    return new exchangeClass
    
}

module.exports = init