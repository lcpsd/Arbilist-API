function init(req, res, next){
	if(!req.body.passwd){
		return res.json({error:'missing_parameter_passwd'})
	}
	
	if(!req.body.newPass){
		return res.json({error:'missing_parameter_newPass'})
	}

	next()
}

module.exports = init