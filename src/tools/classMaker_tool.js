const ccxt  = require('ccxt')

function init(exchangeName, apiKey, secretKey){
    class exchangeClass{
        constructor(){
            
            this.exchangeCCXTclass = ccxt[exchangeName]
            this.client = new this.exchangeCCXTclass({apiKey:apiKey, secret: secretKey})
        }

        async currentPrice(symbol){
            let result = await this.client.fetchTicker(symbol)
            result = result.info

            const keysForPrice = ['pirce', 'lastPrice', 'last', 'price', 'close']

            for(let key of keysForPrice) {
                if(result[key] != null || result[key] != undefined){
                    return parseFloat( result[key] )
                }
            }
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