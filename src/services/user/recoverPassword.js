const passgenerator = require('generate-password')
const bcrypt = require('bcryptjs')
const validator = require('../../validators/generic')
const nodemailer = require('nodemailer')
const Axios = require('axios').default

async function init(req, userModel){
    
    const {email} = req.body

    //check if e-mail exists
    const checkEmail = await validator.checkEmail(req.body.email, userModel)

    if(!checkEmail) return {error: "this_e-mail_dosen't_exists"}

    const supportEmail = process.env.SUPPORT_EMAIL
    const supportSecret = process.env.SUPPORT_SECRET

    //Temp Password Gen
    const tempPass = passgenerator.generate({lenght:10, numbers: true, symbols: true})
    const salt = await bcrypt.genSalt(10)
    const passwordHash = await bcrypt.hash(tempPass, salt)

    //Update user password
    await userModel.update({passwordHash: passwordHash}, {where:{email: email}})

    //Transporter Class
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
        text: `Dear user, your temp password is: ${tempPass}`
    };

    if(process.env.SUPPORT_EMAIL == {error: 'support_config_needed_in_environment'})

    //try to send e-mail
    try{
        transporter.sendMail(mailInfo)
        return {success:"new_password_sended"}
    }catch(error){
        return {error:"internal_server_error"}
    }
    
}

module.exports = init