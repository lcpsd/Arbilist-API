const bcrypt = require('bcryptjs')
const admins = require('../model/admins_model')

module.exports = {
    async init(req, res){
        let {email} = req.body
        let {passwd} = req.body

        await admins.create({
            email: email,
            passwd: passwd
        })
        
        res.json({body: 'admin_created'})
    }
}