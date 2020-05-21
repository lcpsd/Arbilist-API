async function init(req, res, next){
    if(!req.body.symbol){
		return res.json({msg:'missing_parameter_symbol'})
    }
    
    if(!req.body.btcQty){
		return res.json({msg:'missing_parameter_btcQty'})
    }

	next()
}