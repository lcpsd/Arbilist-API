function init(req, res, next){
	if(!req.query.token){
		return res.json({error:'missing_parameter_token'})
    }
    if(!req.query.newpass){
		return res.json({error:'missing_parameter_newpass'})
	}
	next()
}

module.exports = init