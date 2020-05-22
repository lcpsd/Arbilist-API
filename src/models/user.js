'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    passwdHash: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    
  };
  return User;
};