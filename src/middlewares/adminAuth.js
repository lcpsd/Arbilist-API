async function init (req, res, next){
    if(req.session.email != undefined){
        return next()
    }
    return res.json({err: "unautorized"})
}

module.exports = init