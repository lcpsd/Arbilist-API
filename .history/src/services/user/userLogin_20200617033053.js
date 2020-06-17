const validator = require('../../validators/generic')

async function init(req, userModel){

	const obj = await userModel.findOne({raw: true, where: {email:req.body.email}})

	if(obj == null) return {error: 'user_not_found'}

	let check = await validator.checkPasswd(req.body.email, req.body.passwd, userModel)
    
	if(!check) return {error: 'incorrect_password'}

	req.session.email = req.body.email
	req.session.userId = obj.id

	return {success:'logged', session: req.session}
}

module.exports = init