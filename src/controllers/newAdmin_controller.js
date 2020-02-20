const bcrypt = require('bcryptjs')
const admins = require('../model/admins_model')

module.exports = {
    async init(req, res){
        let {email} = req.body
        let {passwd} = req.body

        let salt = await bcrypt.genSalt(10)
        let hash = await bcrypt.hash(passwd, salt)

        let find = await admins.findOne({raw:true, where: {email: email} })

        if(find) return res.json({body: "admin_aready_exists"})

        let adminCreation = await admins.create({
            email: email,
            passwd: hash
        })
        
        if(adminCreation.dataValues) return res.json({body: 'admin_created'})

        return res.json({body: 'error_at_register'})
        
    }
}