'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: DataTypes.STRING,
    passwd: DataTypes.STRING,
    plan: DataTypes.STRING,
    publicKey: DataTypes.STRING,
    secretKey: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    
  };
  return User;
};