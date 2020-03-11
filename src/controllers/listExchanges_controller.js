const exchangesModel = require('../model/exchanges_model')

module.exports = { 
    async init(req, res){
        let exchanges = await exchangesModel.findAll({raw: true})
        
        let exchangeNames = new Array

        for(let obj of exchanges){
            exchangeNames.push(obj.name)
        }

        return res.json(exchangeNames)
    }
}