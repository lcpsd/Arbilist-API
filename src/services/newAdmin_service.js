const bcrypt = require('bcryptjs')

async function newAdmin(req, res, adminModel){

    let {email} = req.body
    let {passwd} = req.body
    let salt = await bcrypt.genSalt(10)
    let hash = await bcrypt.hash(passwd, salt)

    let find = await adminModel.findOne({raw:true, where: {email: email} })

    if(find) return {body: "admin_aready_exists"}

    let adminCreation = await adminModel.create({
        email: email,
        passwd: hash
    })
    
    if(adminCreation.dataValues) return {body: 'admin_registered'}

    return {body: 'error_at_register'}
    
}

module.exports = newAdmin