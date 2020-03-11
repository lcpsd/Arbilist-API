const Database = require("../model/index")
const finderService = require('../services/finder_service')
const listExchangesService = require('../services/listExchanges_service')
const newexchangeService = require("../services/newExchange_service")
const exchangesModel = Database["Exchange"]

class exchangesController{

    async finder(req, res){
        
        let finderResult = await finderService(req, res, exchangesModel)
        return res.json(finderResult)
    }

    async list(req, res){
        let listResult = await listExchangesService(req, res, exchangesModel)
        return res.json(listResult)
    }

    async newExchange(req, res){
        let newResult = await newexchangeService(req, res, exchangesModel)
        return res.json(newResult)
    }
}

module.exports = new exchangesController