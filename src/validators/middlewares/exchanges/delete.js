function init(req, res, next){
    if(!req.body.name){
		return res.json({msg:'missing_parameter_name'})
	}

	next()
}

module.exports = init