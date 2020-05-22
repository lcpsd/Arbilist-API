const validator = require('../../generic')
const models = require('../../../models/index')
const userModel = models['User']

async function init(req, res, next){

	const checkExists = await validator.checkEmail(req.body.email, userModel)

	if(!checkExists) return res.json({error:"not_registered"})

	if(!req.body.passwd){
		return res.json({msg:'missing_parameter_passwd'})
	}

	next()
}

module.exports = init