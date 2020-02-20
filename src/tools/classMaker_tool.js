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

            if(exchangeName == 'coinbasepro'){
                result = result.info
                return parseFloat(result.price)
            }
            result = result.info
            result = parseFloat( result.lastPrice )
            return result
        }

        async fees(symbol){
            if(exchangeName == 'binance'){
                let fees = await this.client.fetchTradingFees()
                let taker = fees[symbol]['taker']

                let fundingFees = await this.client.fetchFundingFees()
                let coin = symbol.split('/')
                coin = coin[0]
                let symbolFee = fundingFees['withdraw'][coin]

                return {takerPercentage: taker, symbolFeeQty: symbolFee}
            }   
            
        }

    }

    return new exchangeClass
    
}

module.exports = init