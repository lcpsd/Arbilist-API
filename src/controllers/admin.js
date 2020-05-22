const models = require('../models/index')
const adminModel = models['admin']
const create_service = require('../services/admin/createAdmin')
const read_service = require('../services/admin/readAdmins')
const delete_service = require('../services/admin/deleteAdmin')
const update_service = require('../services/admin/update')

class Admin{

	async create(req, res){
		let result = await create_service(req, adminModel)
		return res.json(result)
	}

	async read(req, res){
		let result = await read_service(adminModel)
		return res.json(result)
	}

	async updateEmail(req, res){
		let result = await update_service.email(req, adminModel)
		return res.json(result)
	}

	async updatePasswd(req, res){
		let result = await update_service.passwd(req, adminModel)
		return res.json(result)
	}

	async delete(req, res){
		let result = await delete_service(req, adminModel)
		return res.json(result)
	}


}

module.exports = new Admin()