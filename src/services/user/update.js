const validator = require('../../validators/generic')
const bcrypt = require('bcryptjs')

class init{
	async email(req, userModel){

		let check = await validator.checkPasswd(req.session.email, req.body.passwd, userModel)
	
		if(!check) return {error:'password_wrong'}
	
		let result = await userModel.update({email: req.body.newEmail}, {where:{email: req.session.email}})
	
		req.session.email = req.body.email
	
		if(result[0] == 1 || result == 1) return {success:'user_updated'}
	
		return {error:'user_not_found'}
	
	}

	async passwd(req, userModel){

		let check = await validator.checkPasswd(req.session.email, req.body.passwd, userModel)
	
		if(!check) return {error: 'wrong_password'}
	
		let salt = await bcrypt.genSalt(10)
		let hash = await bcrypt.hash(req.body.newPass, salt)
	
		let result = await userModel.update({passwdHash: hash}, {where:{email: req.session.email}})
	
		if(result[0] == 1 || result == 1) return {success:'user_updated'}
	
		return {error:'user_not_found'}
	
	}

	async plan(req, userModel, plainModel){

		let check = await validator.checkName(req.body.planName, plainModel)
	
		if(!check) return {error:'plain_does_not_exists'}
		
		let result = await userModel.update({planId: req.body.planId}, {where:{email: req.session.email}})
	
		if(result[0] == 1) return {success:'user_updated'}
	
		return {error:'user_not_found'}
	
	}
}

module.exports = new init()