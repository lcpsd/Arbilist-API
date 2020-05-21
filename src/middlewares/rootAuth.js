const models = require('../models/index')
const adminModel = models['admin']
const bcrypt = require('bcryptjs')

function init(req, res, next){

    let rootObj = await adminModel.findOne({where:{email:"root@root"}})

    let compare = await bcrypt.compare(req.body.rootPass, rootObj.passwd)

    if(!compare) return res.json({error:"root_pass_wrong"})

    next()
}

module.exports = init