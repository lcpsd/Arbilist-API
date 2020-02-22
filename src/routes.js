const Express = require('express')
const router = Express.Router()
const finder_controller = require('./controllers/finder_controller')
const newAdmin_controller = require('./controllers/newAdmin_controller')
const admin_login = require('./controllers/adminLogin_controller')
const adminAuth = require('./middlewares/adminAuth')
const newExchange_controller = require('./controllers/newExchange_controller')
const listExchanges_controller = require('./controllers/listExchanges_controller')

router.post('/finder', finder_controller.init)
//parms: symbol
router.post('/adminLogin', admin_login.init)
//parms: email, passwd
router.post('/registerAdmin', adminAuth, newAdmin_controller.init)
//parms: email, passwd
router.post('/newExchange', adminAuth, newExchange_controller.init)
//parms: name, apiKey, secretKey
router.get('/exchanges',adminAuth, listExchanges_controller.init)
module.exports = router