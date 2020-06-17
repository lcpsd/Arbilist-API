const models = require('../models/index')
const user_model = models['User']
const admin_model = models['admin']
const userLogin_service = require('../services/user/userLogin')
const adminLogin_service = require('../services/admin/adminLogin')

class login{
	async userLogin(req, res){
		let result = await userLogin_service(req, user_model)
		return res.json(result)
	}

	async adminLogin(req, res){
		let result = await adminLogin_service(req, admin_model)
		return res.json(result)
	}


}

module.exports = new login()