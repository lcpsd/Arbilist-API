const Database = require("../models/index")
const search = require('../services/search_service')
const listExchangesService = require('../services/exchange/readAll_service')
const newexchangeService = require("../services/exchange/new_service")
const exchangesModel = Database["Exchange"]

class exchangesController{

    async finder(req, res){
        
        let result = await finderService(req, res, exchangesModel)
        return res.json(result)
    }

    async list(req, res){
        let result = await listExchangesService(req, res, exchangesModel)
        return res.json(result)
    }

    async newExchange(req, res){
        let result = await newexchangeService(req, res, exchangesModel)
        return res.json(result)
    }
}

module.exports = new exchangesController