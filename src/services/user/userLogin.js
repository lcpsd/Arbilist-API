
const validator = require('../../validators/generic')

async function init(req, userModel, jwt, jwtSecret){

	try{
		const obj = await userModel.findOne({raw: true, where: {email:req.body.email}})
		if(obj == null) return {error: 'user_not_found'}

		let check = await validator.checkPasswd(req.body.email, req.body.passwd, userModel)
		if(!check) return {error: 'incorrect_password'}

		let signPromise = new Promise( async (resolve, reject) => {
			await jwt.sign({id: obj.id, email: req.email}, jwtSecret, {expiresIn: '24h'}, (err, token) => {
				if(err){
					return reject(error)
				}
				return resolve(token)
			})
		})

		let jwtResult = await Promise.resolve(signPromise)
		
		req.session.userId = obj.id
		req.session.email = obj.email

		return {success: jwtResult}

	}catch(error){
		console.log(error)
		return {error: "internal_error"}
	}
}

module.exports = init