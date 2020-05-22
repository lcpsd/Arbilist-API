async function read(req, exchanges_model){
    
    try{
        
        await exchanges_model.destroy({where: {name: req.body.name, userId: req.session.userId}})
        
        return {success: 'exchange_delete'}
        
    }catch(error){
        return {error: error}
    }
    
}

module.exports = read