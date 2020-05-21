
async function newExchange(req, exchanges_model){

    let findOne = await exchanges_model.findOne({
        where: {
            name: req.body.name, userId: req.session.userId
        }
    })

    if(findOne) return {error: "exchange_aready_exists"}

    try{
        await exchanges_model.create({
            name: req.body.name,
            apiKey: req.body.apiKey,
            secretKey: req.body.secretKey,
            userId: req.session.userId
        })

        return {success: "exchange_created"}

    }catch(error){
        return {error: error}
    }

}

module.exports = newExchange