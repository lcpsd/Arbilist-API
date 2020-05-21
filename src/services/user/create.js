const bcrypt = require('bcryptjs')
const validator = require('../../validators/generic')

async function init(req, userModel){

	let check = await validator.checkEmail(req.body.email, userModel)
	if(check) return {error: 'user_aready_exists'}

	let salt = await bcrypt.genSalt(10)
	let hash = await bcrypt.hash(req.body.passwd, salt)

	await userModel.create({
		name: req.body.name,
		email:req.body.email,
		passwdHash: hash
	})

	return {success:'user_created'}
}

module.exports = init