'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Users', [{
        email:"root@root.com",
        passwd: "$2a$10$bnMKEH9JkOjAmKAnH6mF4O9tUBlMV.lbhoYOSLnjUcdIECUIQZud2"
      }], {});
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('People', null, {});
  }
};
