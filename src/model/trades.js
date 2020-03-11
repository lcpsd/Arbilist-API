'use strict';
module.exports = (sequelize, DataTypes) => {
  const Trades = sequelize.define('Trades', {
    buyValue: DataTypes.FLOAT,
    sellValue: DataTypes.FLOAT,
    exchangeBuy: DataTypes.STRING,
    exchangeSell: DataTypes.STRING
  }, {});
  Trades.associate = function(models) {
    // associations can be defined here
  };
  return Trades;
};