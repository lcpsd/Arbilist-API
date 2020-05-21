const bcrypt = require('bcryptjs')
const validator = require('../../validators/generic')

async function init(req, adminModel){
	let checkExists = await validator.checkEmail(req.body.email, adminModel)
	
	if(checkExists) return {error:'admin_aready_registered'}
	
	let checkRoot = await validator.checkPasswd('root@root', req.body.rootPass, adminModel)
	if(!checkRoot) return {error:'invalid_root_pass'}

	const salt = await bcrypt.genSalt(10)
	const hash = await bcrypt.hash(req.body.passwd, salt)

	await adminModel.create({
		email:req.body.email,
		passwdHash: hash
	})

	return {success:'admin_created'}
}

module.exports = init