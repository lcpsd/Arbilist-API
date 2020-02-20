async function init (req, res, next){
    if(res.session.email){
        return next()
    }
    return res.json({err: "unautorized"})
}