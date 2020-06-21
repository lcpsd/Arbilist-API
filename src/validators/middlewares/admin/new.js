function init(req, res, next){

	if(!req.body.email){
		return res.json({error:'missing_parameter_email'})
	}

	if(!req.body.passwd){
		return res.json({error:'missing_parameter_passwd'})
	}

	if(!req.body.rootPass){
		return res.json({error:'missing_parameter_rootPass'})
	}

	next()
}

module.exports = init