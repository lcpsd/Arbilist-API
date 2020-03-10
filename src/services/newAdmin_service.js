const bcrypt = require('bcryptjs')

async function newAdmin(req, res, admins_model){

    let {email} = req.body
    let {passwd} = req.body
    let salt = await bcrypt.genSalt(10)
    let hash = await bcrypt.hash(passwd, salt)

    let find = await admins_model.findOne({raw:true, where: {email: email} })

    if(find) return {body: "admin_aready_exists"}

    let adminCreation = await admins_model.create({
        email: email,
        passwd: hash
    })
    
    if(adminCreation.dataValues) return {body: 'admin_created'}

    return {body: 'error_at_register'}
    
}

module.exports = newAdmin