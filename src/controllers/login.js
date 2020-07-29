const models = require('../models/index')
const user_model = models['User']
const admin_model = models['admin']
const userLogin_service = require('../services/user/userLogin')
const adminLogin_service = require('../services/admin/adminLogin')
const logoff_service = require('../services/user/logoff')

const jwt = require('jsonwebtoken')
const jwtSecret = require('../middlewares/config/jwtPass')

class login{
	async userLogin(req, res){
		let result = await userLogin_service(req, user_model, jwt, jwtSecret)
		return res.json(result)
	}

	async userLogoff(req, res){
		let result = await logoff_service(req, res)
		return res.json(result)
	}
	async adminLogin(req, res){
		let result = await adminLogin_service(req, admin_model, jwt, jwtSecret)
		return res.json(result)
	}


}

module.exports = new login()