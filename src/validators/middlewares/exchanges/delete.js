function init(req, res, next){
    if(!req.body.name){
		return res.json({error:'missing_parameter_name'})
	}

	next()
}

module.exports = init