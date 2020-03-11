const bcrypt = require('bcryptjs')

async function newAdmin(req, res, adminModel){

    let {email} = req.body
    let {passwd} = req.body
    let {rootPasswd} = req.body
    let salt = await bcrypt.genSalt(10)
    let hash = await bcrypt.hash(passwd, salt)

    let rootUser = await adminModel.findOne({raw: true, where: {email: "root@root.com"}})
    let find = await adminModel.findOne({raw:true, where: {email: email} })

    let rootValidator = bcrypt.compare(rootPasswd, rootUser.passwd)

    if(find) return {body: "admin_aready_exists"}

    if(!rootValidator) return {body: "incorrect_root_password"}

    let adminCreation = await adminModel.create({
        email: email,
        passwd: hash
    })
    
    if(adminCreation.dataValues) return {body: 'admin_registered'}

    return {body: 'error_at_register'}
    
}

module.exports = newAdmin