const validator = require('../../validators/generic')

async function init(req, adminModel){

	let result = await adminModel.destroy({
		where:{email: req.session.admin}
	})

	if(result == 1 || result[0] == 1) return {success:'user_deleted'}

	return {error:'user_not_found'}

}

module.exports = init