'use strict';

const bcrypt = require('bcryptjs')

const passwd = 123
const hash = bcrypt.hash(passwd)

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('User', [{
        email: 'test@test',
        passwd: hash
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('People', null, {});
  }
};
