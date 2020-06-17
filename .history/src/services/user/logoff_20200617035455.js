async function init(req, res){
    res.clearCookie('s');
    return {success: "not_logged"}
}

module.exports = init