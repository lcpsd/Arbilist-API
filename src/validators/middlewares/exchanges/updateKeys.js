async function init(req, res, next){
    if(!req.body.name){
		return res.json({msg:'missing_parameter_name'})
    }
    
    if(!req.body.publicKey){
		return res.json({msg:'missing_parameter_publicKey'})
    }
    
    if(!req.body.privateKey){
		return res.json({msg:'missing_parameter_privateKey'})
	}

	next()
}