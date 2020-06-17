'use strict';
module.exports = (sequelize, DataTypes) => {
  const Exchange = sequelize.define('Exchange', {
    name: DataTypes.STRING,
    publicKey: DataTypes.STRING,
    privateKey: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    belongsSystem: DataTypes.BOOLEAN
  }, {});
  Exchange.associate = function(models) {
    Exchange.belongsTo(models.User, {foreignKey: 'userId', as: 'user'})
  };
  return Exchange;
};