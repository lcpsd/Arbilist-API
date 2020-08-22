const Database = require("../models/index")
const exchangesModel = Database["Exchange"]

const new_service = require('../services/exchange/new')
const read_service = require('../services/exchange/read')
const update_service = require('../services/exchange/update')
const delete_service = require('../services/exchange/delete')
const search_service = require('../services/exchange/search')
const publicSearch_service = require('../services/exchange/publicSearch')

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

    async publicSearch(req, res){
        let result = await publicSearch_service(req, exchangesModel)
        return res.json(result)
    }


}

module.exports = new exchangesController