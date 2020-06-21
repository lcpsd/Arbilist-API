function init(req, res, next){
    if(!req.body.symbol){
		return res.json({error:'missing_parameter_symbol'})
    }
    
    if(!req.body.btcQty){
		return res.json({error:'missing_parameter_btcQty'})
    }

    const symbol = req.body.symbol
    let split = symbol.split('/')
    split[1] = split[1].toUpperCase()

    if(split[1] != 'BTC') return res.json({error: "only_BTC_pairs_(AAA/BTC)"})

	next()
}

module.exports = init