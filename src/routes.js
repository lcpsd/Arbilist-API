const Express = require('express')
const router = Express.Router()

//User Controllers
const user_controller = require('./controllers/user')

//User middlewares
const userAuth = require('./middlewares/userAuth')
const adminAuth = require('./middlewares/adminAuth')
const planValidity = require('./middlewares/planValidity')

//validators
const loginUserMid = require('./validators/middlewares/user/delete')
const newUserMid = require('./validators/middlewares/user/new')
const updateUserEmailMid = require('./validators/middlewares/user/updateEmail')
const updateUserPassMid = require('./validators/middlewares/user/updatePass')
const updateUserPlanMid = require('./validators/middlewares/user/updatePlan')
const deleteUserMid = require('./validators/middlewares/user/delete')

//user Routes
routes.post('/user/new', newUserMid, user_controller.create)
//{name: string, email: string, passwd: string}
        
routes.post('/user', adminAuth, user_controller.readAll)
//{startId: int, endId: int}
        
routes.post('/user/login', loginUserMid, planValidity, login_controller.userLogin)
//{email: string, passwd: string}
        
routes.put('/user/update/email',updateUserEmailMid, userAuth, user_controller.updateEmail)
//{ newEmail: string, passwd: string }

routes.put('/user/update/passwd',updateUserPassMid, userAuth, user_controller.updatePass)
//{ passwd: string , newPass: string }

routes.put('/user/update/plan',updateUserPlanMid, userAuth, user_controller.updatePlan)
//{ planName: string }
        
routes.delete('/user/delete',deleteUserMid, userAuth, user_controller.delete)
//{ passwd: string }

routes.get('/user/session', userAuth, user_controller.sessionData)

//_________________________________________________________________________________________________________//


//Admin Controllers
const admin_controller = require('./controllers/admin')

//Admin Middlewares
const loginAdminMid = require('./validators/middlewares/admin/login')
const newAdminMid = require('./validators/middlewares/admin/login')
const deleteAdminMid = require('./validators/middlewares/admin/login')
const updateAdminEmailMid = require('./validators/middlewares/admin/login')
const updateAdminPasswdMid = require('./validators/middlewares/admin/login')

//admin Routes
routes.post('/admin',adminAuth, admin_controller.read)
//{startId: int, endId: int}

routes.post('/admin/new', newAdminMid, admin_controller.create)
//{email: string, passwd: string, rootPass: string}
    
routes.post('/admin/login', loginAdminMid, login_controller.adminLogin)
//{passwd: string}

routes.delete('/admin/delete', deleteAdminMid, adminAuth, admin_controller.delete)
//{passwd: string}

routes.put('/admin/update/email', updateAdminEmailMid, adminAuth, admin_controller.updateEmail)
//{newEmail: string, passwd: string}

routes.put('/admin/update/passwd', updateAdminPasswdMid, adminAuth, admin_controller.updatePasswd)
//{newPasswd: string, passwd: string}

//_________________________________________________________________________________________________________//


//Exchange Controllers
const exchanges_controller = require("./controllers/exchanges")

//Exchange Validators
const deleteExchangeMid = require('./validators/middlewares/exchanges/delete')
const newExchangeMid = require('./validators/middlewares/exchanges/delete')
const searchExchangeMid = require('./validators/middlewares/exchanges/delete')
const updateKeysExchangeMid = require('./validators/middlewares/exchanges/delete')
const updateNameExchangeMid = require('./validators/middlewares/exchanges/delete')

//Exchange Routes
router.get('/exchange/search', userAuth, searchExchangeMid, exchanges_controller.search)
//{symbol: string, btcQty: string}

router.post('/exchange/new', userAuth, newExchangeMid, exchanges_controller.newExchange)
//{name: string, publicKey: string, secretKey: string}

router.get('/exchange/list', userAuth, exchanges_controller.read)
//

router.post('/exchange/update/name', userAuth, updateNameExchangeMid, exchanges_controller.updateName)
//{oldName: string, newName: string}

router.post('/exchange/update/keys', userAuth, updateKeysExchangeMid, exchanges_controller.updateKeys)
//{name: string, publicKey: string, privateKey}

router.post('/exchange/delete', userAuth, deleteExchangeMid, exchanges_controller.delete)
//{name: string}
module.exports = router
