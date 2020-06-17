async function init(req, res){
    res.clearCookie('s');
    console.log(req.session)
    return {success: "not_logged"}
}

module.exports = init