const bcrypt = require('bcryptjs')

class init{
	async checkEmail(email, model){
		const obj = await model.findAll({where: {email: email}, raw: true})

		if(obj.length == 0) return false
		return true
	}

	async checkPasswd(email, passwd, model){
		const obj = await model.findOne({where: {email:email}, raw: true})
		if(obj == null) return false

		const compare = bcrypt.compare(passwd, obj.passwdHash)
		
		if(!compare) return false
		return true
	}

	async checkName(name, model){
		const obj = await model.findOne({where: {name: name}, raw: true})
		if(obj == null) return false

		return true
	}

	async checkId(id, model){
		const obj = await model.findByPk(id)
		if(obj == null) return false

		return true
	}
}

module.exports = new init()