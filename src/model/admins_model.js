const Sequelize = require('sequelize')
const db = require('../db/db')

let admin = db.define('admins',{
    email:{
        type: Sequelize.TEXT,
        allowNull: false
    },
    passwd:{
        type: Sequelize.TEXT,
        allowNull: false
    }
})

admin.sync({force: false})

module.exports = admin