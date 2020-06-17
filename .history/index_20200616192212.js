const Express = require('express')
const app = Express()
const routes = require('./src/routes')
const bp = require('body-parser')
const session = require("express-session")

app.use(session({ secret:'batman_and_robin' }))

app.use(bp.json())
app.use(bp.urlencoded({extended: false}))

app.use('/', routes)

app.listen(8787, () => console.log('serverOK'))