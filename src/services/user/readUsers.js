async function init(userModel){

	const {startId} = req.body
	const {endId} = req.body

	let result = await userModel.findAll({raw: true, where:{ [op.between]:[startId, endId] }})
	return result
}

module.exports = init