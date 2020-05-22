'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: DataTypes.STRING,
    passwd: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    
  };
  return User;
};