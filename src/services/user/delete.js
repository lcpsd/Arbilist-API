const validator = require('../../validators/generic')
const fs = require('fs')
//gravar log de delete 

async function init(req, userModel){

	if(req.session.admin){
		let result = await userModel.destroy({where:{email:req.body.email}})
        
		if(result[0] == 1){
			await fs.writeFile('../../logs/admin.log',`User: ${req.body.email}\nAdmin: ${req.session.admin}\nStatus: DELETED`)
			return {success:'user_deleted'}
		} 
		return {error:'user_not_found'}

	}

	let check = await validator.checkPasswd(req.session.email, req.body.passwd, userModel)

	if(!check) return {error:'password_wrong'}

	let result = await userModel.destroy({where:{email:req.session.email}})
	
	if(result == 1) return {success:'user_deleted'}

	return {error:'user_not_found'}
}

module.exports = init