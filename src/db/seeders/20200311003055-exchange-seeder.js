'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Exchanges', [{
        name:"binance",
        apiKey:"tLFNfIB8iFcIPaJjP69Xd9qO86scTwGr1UyE8TV9ZT15vxrk2ldmuVSczYrEQprO",
        secretKey:"MUIKUSW3vhYbNL54DQT3XUnINVlVPHtWx1R590c29D9K2OvZbF4q8jfJcnJWoO3e",
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name:"kucoin",
        apiKey:"5e4f44e6b07df40008eb1fcf",
        secretKey:"85076d6c-2118-4356-9e9d-075b1bc5e1fd",
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name:"okex",
        apiKey:"4761e31e-82d7-453f-8f06-189b949623fc",
        secretKey:"3B95581D8588EBC53AB01774A61F4B9D",
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name:"yobit",
        apiKey:"CDE9180D09A52E7599EE3A2CDE139037",
        secretKey:"147d6c2de47fdb19c07d9351746ff6b9",
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name:"hitbtc",
        apiKey:"L2Mp8bdgHnonMuLiO1gyYMgQL5dwCGOg",
        secretKey:"JcsLboxwQuNFTHD3QxSH_XLe8SF3A9S-",
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name:"bitforex",
        apiKey:"9ee3cb4cb402eca95f702e22add679a8",
        secretKey:"e98a9bd0a662e820baf65815d2635a1f",
        createdAt: new Date(),
        updatedAt: new Date()
      },], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Exchange', null, {});

  }
};
