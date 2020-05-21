
async function listExchanges(req, res, exchanges_model){

    let exchanges = await exchanges_model.findAll({raw: true})
    
    let exchangeNames = new Array

    for(let obj of exchanges){
        exchangeNames.push(obj.name)
    }

    return exchangeNames
}

module.exports = listExchanges