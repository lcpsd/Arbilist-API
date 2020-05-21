const Database = require("../models/index")
const exchangesModel = Database["Exchange"]

const new_service = require("../exchange/services/exchange/new")
const read_service = require('../exchange/services/exchange/readAll')
const update_service = require('../exchange/services/exchange/update')
const delete_service = require('../exchange/services/exchange/delete')
const search_service = require('../exchange/services/search')

class exchangesController{

    async create(req, res){
        let result = await new_service(req, exchangesModel)
        return res.json(result)
    }

    async read(req, res){
        let result = await read_service(req, exchangesModel)
        return res.json(result)
    }

    async updateName(req, res){
        let result = await update_service.name(req, exchangesModel)
        return res.json(result)
    }

    async updateKeys(req, res){
        let result = await update_service.keys(req, exchangesModel)
        return res.json(result)
    }

    async delete(req, res){
        let result = await delete_service(req, exchangesModel)
        return res.json(result)
    }

    async search(req, res){ // search for coin prices
        
        let result = await search_service(req, exchangesModel)
        return res.json(result)
    }


}

module.exports = new exchangesController