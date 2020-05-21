
async function newExchange(req, exchanges_model){
    let {name} = req.body
    let {apiKey} = req.body
    let {secretKey} = req.body

    let findOne = await exchanges_model.findOne({where: {name: name}})

    if(findOne) return {body: "exchange_aready_exists"}

    try{
        await exchanges_model.create({
            name:name,
            apiKey: apiKey,
            secretKey: secretKey
        })

        return {success: "exchange_created"}

    }catch(error){
        return {error: error}
    }

}

module.exports = newExchange