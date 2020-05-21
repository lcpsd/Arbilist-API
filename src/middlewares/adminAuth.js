function init(req, res, next){
	if(!req.session.admin){
		return res.json({msg:'unauthorized'})
	}

	next()
}

module.exports = init