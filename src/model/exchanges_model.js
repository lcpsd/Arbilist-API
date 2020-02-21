const db = require("../db/db")
const Sequelize = require('sequelize')

let exchange = db.define('exchanges', {
    name:{
        type:Sequelize.TEXT,
        allowNull: false
    },
    apiKey:{
        type:Sequelize.TEXT,
        allowNull: false
    },
    secretKey:{
        type:Sequelize.TEXT,
        allowNull: false
    }
})

exchange.sync({force: false})

module.exports = exchange