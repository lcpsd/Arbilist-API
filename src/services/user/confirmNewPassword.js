const njwt = require('njwt')
const jwtSecret = require('../../middlewares/config/jwtPass')
const bcrypt = require('bcryptjs')

async function init(req, user_model){
    const {newpass} = req.query
    const {token} = req.query

    //decript token using promise
    const jwtDescriptPromise = new Promise(async (resolve, reject) => {
        await njwt.verify(token, jwtSecret, (err, verifiedJwt) => {
            if(err) return reject(err)

            return resolve(verifiedJwt)
          })
    })
    try{
        const decriptedJwt = await Promise.resolve(jwtDescriptPromise).then(result => result).catch(err => err)
        const userId = decriptedJwt.id
    
        //generates password hash
        let salt = await bcrypt.genSalt(10)
        let hash = await bcrypt.hash(newpass, salt)
        
        //update user
        let result = await user_model.update({passswordHash: hash}, {where:{id: userId}})
        
        return {success:'user_updated'}
    
    }catch(err){
        return {err}
    }
    


}

module.exports = init