require('dotenv').config()

const Express = require('express')
const app = Express()
const routes = require('./src/routes')
const bp = require('body-parser')
const session = require("express-session")
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session')

app.use(session({ secret:'batman_and_robin' }))

app.use(cookieParser())

app.use(cookieSession({
    name: 'session',
    keys: ['key1', 'key2'],
  }))

app.use(bp.json())
app.use(bp.urlencoded({extended: false}))

app.use('/', routes)

let port = process.env.PORT || 3000
app.listen(port, () => console.log('serverOK'))