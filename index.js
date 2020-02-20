const Express = require('express')
const app = Express()
const routes = require('./src/routes')
const bp = require('body-parser')
const path = require("path")
const session = require("express-session")
const user = require('./src/model/admins_model')

app.use(session({ secret:'batman_and_robin' }))

app.use(bp.json())
app.use(bp.urlencoded({extended: false}))

app.use('/', routes)

app.listen(8787, () => console.log('serverOK'))