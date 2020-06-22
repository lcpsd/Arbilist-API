const {Op} = require('sequelize')

async function init(req, exchanges_model){

    let findOne = await exchanges_model.findOne({
        where: {
            [Op.or]:[
                {name: req.body.name, userId: req.session.userId},
                {name: req.body.name, userId: 1}
            ]
        }
    })

    if(findOne) return {error: "exchange_aready_exists"}

    try{
        await exchanges_model.create({
            name: req.body.name,
            publicKey: req.body.publicKey,
            privateKey: req.body.privateKey,
            userId: req.session.userId
        })

        return {success: "exchange_created"}

    }catch(error){
        return {error: error}
    }

}

module.exports = init