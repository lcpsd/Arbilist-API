function init(req, res, next){

	if(!req.body.newPasswd){
		return res.json({msg:'missing_parameter_newPasswd'})
	}

	if(!req.body.passwd){
		return res.json({msg:'missing_parameter_passwd'})
	}

	next()
}

module.exports = init