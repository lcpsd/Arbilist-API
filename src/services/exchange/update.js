class init{
    async name(req, exchangeModel){
        try{
            await exchangeModel.update(
                {
                    name:req.body.newName
                }, 
                {
                    where:{ name: req.body.name, userId: req.session.userId }
                })

            return {success: 'name_updated'}
        }catch(error){
            return {error: error}
        }
    }
    
    async keys(req, exchangeModel){
        try{
            await exchangeModel.update(
                {
                    publicKey: req.body.publicKey,
                    privateKey: req.body.privateKey
                }, 
                {
                    where:{ name: req.body.name, userId: req.session.userId }
                })

            return {success: 'keys_updated'}
        }catch(error){
            return {error: error}
        }
    }
}

module.exports = new init()