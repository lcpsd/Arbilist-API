'use strict';
module.exports = (sequelize, DataTypes) => {
  const Trades = sequelize.define('Trades', {
    buyValue: DataTypes.FLOAT,
    sellValue: DataTypes.FLOAT,
    exchangeBuy: DataTypes.STRING,
    exchangeSell: DataTypes.STRING
  }, {});
  Trades.associate = function(models) {
    Trades.belongsTo(models.User, {foreignKey:'userId', as:'owner'})
  };
  return Trades;
};