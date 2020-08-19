const jwt = require('jsonwebtoken')
const jwtPass = require('../middlewares/config/jwtPass')
function init(req, res, next){
	
	if(req.headers['authorization']){
		const splitToken = req.headers['authorization'].split(' ')

		jwt.verify(splitToken[1], jwtPass, (err, data) => {
			if(err) return res.status(401).json({error: 'invalid_token'})
			return next()
		})
		next()
		return res.json({msg:'invalid_token'})
	}

	return res.json({msg:'invalid_headers'})
	
	next()
}

module.exports = init