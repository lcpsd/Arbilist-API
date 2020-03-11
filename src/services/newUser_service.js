const bcrypt = require('bcryptjs')

async function newAdmin(req, res, userModel){

    let {email} = req.body
    let {passwd} = req.body
    let plan = 'basic'
    let {publicKey} = req.body
    let {privateKey} = req.body

    let find = await userModel.findOne({raw:true, where: {email: email} })

    if(find) return {body: "user_aready_exists"}

    let salt = await bcrypt.genSalt(10)
    let hash = await bcrypt.hash(passwd, salt)

    let adminCreation = await userModel.create({
        email,
        passwd: hash,
        plan,
        publicKey,
        privateKey
    })
    
    if(adminCreation.dataValues) return {body: 'user_registered'}

    return {body: 'error_at_register'}
    
}

module.exports = newAdmin