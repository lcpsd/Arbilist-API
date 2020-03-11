
async function newExchange(req, res, exchanges_model){
    let {name} = req.body
    let {apiKey} = req.body
    let {secretKey} = req.body

    let findOne = await exchanges_model.findOne({where: {name: name}})

    if(findOne) return {body: "exchange_aready_exists"}

    let exchangeCreation = await exchanges_model.create({
        name:name,
        apiKey: apiKey,
        secretKey: secretKey
    })

    if(exchangeCreation.dataValues) {

        return {body: "exchange_created"}
    }

    return {body: "error_at_creation"}
}

module.exports = newExchange