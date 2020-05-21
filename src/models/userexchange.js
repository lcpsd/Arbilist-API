'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserExchange = sequelize.define('UserExchange', {
    exchangeName: DataTypes.STRING,
    publicKey: DataTypes.STRING,
    privateKey: DataTypes.STRING
  }, {});
  UserExchange.associate = function(models) {
    UserExchange.belongsTo(models.User, {foreignKey:'userId', as:'owner'})
  };
  return UserExchange;
};