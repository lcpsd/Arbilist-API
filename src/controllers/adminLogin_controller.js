const bcrypt = require('bcryptjs')
const admins_model = require('../model/admins_model')

module.exports = {
    async init(req, res){
        let {email} = req.body
        let {passwd} = req.body

        let adminObj = await admins_model.findOne({raw: true, where: { email: email}})

        if(adminObj != undefined){
            let compare = await bcrypt.compare(passwd, adminObj.passwd)

            if(compare) { req.session.email = email; return res.json({body: 'logged'}) }

            return res.json({body: 'password_wrong'})

        }else{
            return res.json({body: 'admin_not_find'})
        }
    }
}