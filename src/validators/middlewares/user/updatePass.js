function init(req, res, next){
	if(!req.body.passwd){
		return res.json({msg:'missing_parameter_passwd'})
	}
	
	if(!req.body.newPass){
		return res.json({msg:'missing_parameter_newPass'})
	}

	next()
}

module.exports = init