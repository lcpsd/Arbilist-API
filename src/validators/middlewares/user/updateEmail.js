function init(req, res, next){
	if(!req.body.newEmail){
		return res.json({error:'missing_parameter_newEmail'})
	}
    
	if(!req.body.passwd){
		return res.json({error:'missing_parameter_passwd'})
	}

	next()
}

module.exports = init