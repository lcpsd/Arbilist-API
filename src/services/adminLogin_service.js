const bcrypt = require('bcryptjs')

async function adminLogin(req, res, admins_model){
    let {email} = req.body
    let {passwd} = req.body

    let adminObj = await admins_model.findOne({raw: true, where: { email: email}})

    if(adminObj != undefined){
        let compare = await bcrypt.compare(passwd, adminObj.passwd)

        if(compare) { req.session.email = email; return {body: 'logged'} }

        return {body: 'password_wrong'}

    }else{
        return {body: 'admin_not_find'}
    }
}

module.exports = adminLogin