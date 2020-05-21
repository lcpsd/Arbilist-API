'use strict';
module.exports = (sequelize, DataTypes) => {
  const Exchange = sequelize.define('Exchange', {
    name: DataTypes.STRING,
    apiKey: DataTypes.STRING,
    secretKey: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  Exchange.associate = function(models) {
    Exchange.belongsTo(models.User, {foreignKey: 'userId', as: 'user'})
  };
  return Exchange;
};