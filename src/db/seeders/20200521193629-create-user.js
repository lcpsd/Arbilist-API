'use strict';


module.exports = {
  up: async(queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Users', [{
        name:'tester',
        email: 'test@test',
        passwdHash: "$2y$12$xeO36Ig4WY8yuGwuV.gdv.A4.DIC82JODdNUCrPmJbSG2RNPc2Y1W", //123
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('People', null, {});
  }
};
