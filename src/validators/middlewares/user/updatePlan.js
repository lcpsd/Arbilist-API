function init(req, res, next){

	if(!req.body.planId){
		return res.json({msg:'missing_parameter_planId'})
	}

	next()
}

module.exports = init