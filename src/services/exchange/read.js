
async function read(req, exchanges_model){
    
    try{
        return {success: await exchanges_model.findAll({
            raw: true, where: {userId: req.session.userId}
        })}
    }catch(error){
        return {error: error}
    }
    
}

module.exports = read