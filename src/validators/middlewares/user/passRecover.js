function init(req, res, next){
	if(!req.body.email){
		return res.json({error:'missing_parameter_Email'})
	}
	next()
}

module.exports = init