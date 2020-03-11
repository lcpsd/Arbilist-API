let adminModel = require('../model/admin')

async function init (req, res, next){

    let adminObjects = await adminModel.findAll({raw: true})

    let allAdminEmails = new Array

    for(let obj of adminObjects){
        allAdminEmails.push(obj.email)
    }

    if(req.session.email != undefined && allAdminEmails.includes(req.session.email)){
        return next()
    }
    return res.json({err: "unautorized"})
}

module.exports = init