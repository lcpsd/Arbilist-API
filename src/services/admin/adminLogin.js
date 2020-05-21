const validator = require('../../validators/generic')

async function init(req, adminModel){

	const obj = await adminModel.findOne({raw: true},{where: {email:req.body.email}})

	if(!obj.id) return {error: 'Admin_not_found'}

	let check = await validator.checkPasswd(req.body.email, req.body.passwd, adminModel)
    
	if(!check) return {error: 'incorrect_password'}

	req.session.admin = req.body.email
	req.session.id = obj.id

	return {success:'admin_logged'}
}

module.exports = init