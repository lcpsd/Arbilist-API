async function init(){
    res.clearCookie('s');
    return {success: "not_logged"}
}

module.exports = init