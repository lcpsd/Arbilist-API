const Express = require('express')
const router = Express.Router()
const finder_controller = require('./controllers/finder_controller')
const newAdmin_controller = require('./controllers/newAdmin_controller')
const admin_login = require('./controllers/adminLogin_controller')
const adminAuth = require('./middlewares/adminAuth')

router.post('/finder', adminAuth, finder_controller.init)
//parms: symbol
router.post('/adminLogin', admin_login.init)
//parms: email, passwd
router.post('/registerAdmin', newAdmin_controller.init)
//parms: email, passwd

module.exports = router