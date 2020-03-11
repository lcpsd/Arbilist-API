const Database = require("../model/index")
const adminModel = Database["Admin"]
const adminLogin = require("../services/adminLogin_service")
const newAdmin = require("../services/newAdmin_service")

class adminController{

    async newAdmin(req, res){
        let newAdminResult = await newAdmin(req, res, adminModel)
        return res.json(newAdminResult)
    }

    async adminLogin(req, res){
        let adminLoginResult = await adminLogin(req, res, adminModel)
        return res.json(adminLoginResult)
    }

}

module.exports = new adminController