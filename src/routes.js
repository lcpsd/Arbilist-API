const Express = require('express')
const router = Express.Router()

const adminController = require("./controllers/admin_controller")
const exchangesController = require("./controllers/exchanges_controller")
const adminAuth = require("./middlewares/adminAuth")

router.post('/finder', exchangesController.finder)
//parms: symbol ( LTC/BTC )
router.post('/adminlogin', adminController.adminLogin)
//parms: email, passwd
router.post('/registeradmin', adminAuth, adminController.newAdmin)
//parms: email, passwd
router.post('/newexchange', adminAuth, exchangesController.newExchange)
//parms: name, apiKey, secretKey
router.get('/listexchanges',adminAuth, exchangesController.list)
//parms: none
module.exports = router