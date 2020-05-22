const sequelize = require('sequelize')
const op = sequelize.Op

async function init(admin_model){
	const {startId} = req.body
	const {endId} = req.body

	let result = await admin_model.findAll({raw: true, where:{ [op.between]:[startId, endId] }})
	return result
}

module.exports = init