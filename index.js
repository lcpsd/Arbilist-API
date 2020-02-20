const finder = require('./tools/finder')

async function init(){

    await finder('ETH/BTC', 0.002, ['binance'])

}
init()
