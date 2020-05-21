function init(req, res, next){
    if(!req.body.name){
		return res.json({msg:'missing_parameter_name'})
    }
    
    if(!req.body.newName){
		return res.json({msg:'missing_parameter_publicKey'})
    }
    
	next()
}

module.exports = init