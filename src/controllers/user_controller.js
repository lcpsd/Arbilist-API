const Database = require("../model/index")
const userModel = Database["User"]
const newUser = require("../services/newUser_service")

class adminController{

    async newUser(req, res){
        let newUserResult = await newUser(req, res, userModel)
        return newUserResult
    }

    async userLogin(req, res){
        
    }

    async newUserExchange(req, res){

    }

    async newTrade(req, res){

    }

}

module.exports = new adminController