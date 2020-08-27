const validator = require('../../validators/generic')
const nodemailer = require('nodemailer')
const njwt = require('njwt')
const models = require('../../models/index')
const jwtSecret = require('../../middlewares/config/jwtPass')
const user_model = models['User']

async function init(req, userModel){
    
    const {email} = req.body

    //check if e-mail exists
    const checkEmail = await validator.checkEmail(email, user_model)

    if(!checkEmail) return {error: "this_e-mail_dosen't_exists"}

    const supportEmail = process.env.SUPPORT_EMAIL
    const supportSecret = process.env.SUPPORT_SECRET

    //get user info and creates a token that will send to user e-mail 
    const userObj = await userModel.findOne({raw: true}, {where: {email: email}})
    const userId = userObj.id
    const jwtInfo = { email: email, id: userId}
    const token = njwt.create(jwtInfo, jwtSecret)

    token.setExpiration(new Date().getTime() + 60*1000)

    //Transporter instance
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: supportEmail,
          pass: supportSecret
        }
      });
    
    //Email Info
    const mailInfo = {
        from: 'passwordrecover@arbilist.com',
        to: email,
        subject: 'do not answer',
        text: `Dear user, your temp password recovery link is: ${process.env.PASSWORD_RECOVER_PAGE + token.compact()}`
    };

    if(process.env.SUPPORT_EMAIL == {error: 'support_config_needed_in_environment'})

    //try to send e-mail
    try{
        transporter.sendMail(mailInfo)
        return {success:"new_password_sended"}
    }catch(error){
        return console.log(error)
    }
    
}

module.exports = init