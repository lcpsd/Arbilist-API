
async function listExchanges(req, exchanges_model){
    
    let exchanges = await exchanges_model.findAll({raw: true})
    
    return {success: exchanges}
}

module.exports = listExchanges