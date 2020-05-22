'use strict';


module.exports = {
  up: async(queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('users', [{
        name:'root',
        email: 'root@root',
        passwd: "$2y$12$IEA/WVQG7EuaZoLrJUd.bO2G/J9IGGJka5.TOuHCEb6goBEVRIyHi", //root
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('People', null, {});
  }
};
