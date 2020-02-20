const Express = require('express')
const router = Express.Router()

const finder_controller = require('./controllers/finder')

router.post('/finder', finder_controller.init)

module.exports = router