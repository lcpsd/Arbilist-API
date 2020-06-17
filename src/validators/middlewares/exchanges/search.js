function init(req, res, next){
    if(!req.body.coin){
		return res.json({msg:'missing_parameter_coin'})
    }
    
    if(!req.body.btcQty){
		return res.json({msg:'missing_parameter_btcQty'})
    }

    req.body.coin = req.body.coin.toUpperCase()

	next()
}

module.exports = init