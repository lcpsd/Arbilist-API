'use strict';
module.exports = (sequelize, DataTypes) => {
  const Exchange = sequelize.define('Exchange', {
    name: DataTypes.STRING,
    apiKey: DataTypes.STRING,
    secretKey: DataTypes.STRING
  }, {});
  Exchange.associate = function(models) {
    // associations can be defined here
  };
  return Exchange;
};