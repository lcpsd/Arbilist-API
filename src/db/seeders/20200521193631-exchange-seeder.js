'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

      const models = require('../../models/index')
      const userModel = models['User']

      const userObj = await userModel.findOne({where: {email: "test@test"}})

      return queryInterface.bulkInsert('Exchanges', [{
        name:"binance",
        publicKey:"a2qJI0XJTp6RMlSk8CMY1H5WTwjXOiodQkojCYflku14Rm5XIWgqORT9ZtOctDVh",
        privateKey:"ll2VgG2XwEEJNtIL9UZ54fiTZebHr0ENRA22MCsfaJMPrdBah3SsLSYRdweurFvx",
        userId: userObj.id,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name:"kucoin",
        publicKey:"5e4f44e6b07df40008eb1fcf",
        privateKey:"85076d6c-2118-4356-9e9d-075b1bc5e1fd",
        userId: userObj.id,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name:"okex",
        publicKey:"4761e31e-82d7-453f-8f06-189b949623fc",
        privateKey:"3B95581D8588EBC53AB01774A61F4B9D",
        userId: userObj.id,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name:"yobit",
        publicKey:"CDE9180D09A52E7599EE3A2CDE139037",
        privateKey:"147d6c2de47fdb19c07d9351746ff6b9",
        userId: userObj.id,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name:"hitbtc",
        publicKey:"L2Mp8bdgHnonMuLiO1gyYMgQL5dwCGOg",
        privateKey:"JcsLboxwQuNFTHD3QxSH_XLe8SF3A9S-",
        userId: userObj.id,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name:"bitforex",
        publicKey:"9ee3cb4cb402eca95f702e22add679a8",
        privateKey:"e98a9bd0a662e820baf65815d2635a1f",
        userId: userObj.id,
        createdAt: new Date(),
        updatedAt: new Date()
      },], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Exchange', null, {});

  }
};
