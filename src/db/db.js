const Sequelize = require('sequelize')

let db = new Sequelize('arbilist','root','root123',{
    dialect: 'mysql',
    host:'localhost',
})

module.exports = db