function init(req, res, next){
    if(!req.body.name){
		return res.json({error:'missing_parameter_name'})
    }
    
    if(!req.body.publicKey){
		return res.json({error:'missing_parameter_publicKey'})
    }
    
    if(!req.body.privateKey){
		return res.json({error:'missing_parameter_privateKey'})
	}

	next()
}

module.exports = init