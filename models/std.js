module.exports = function(sequelize, DataTypes){

  var stdColumns = {
    name : DataTypes.STRING
  };

  var stdConfig = {
    classMethods: {}
  };

  var Standard = sequelize.define("Standard", stdColumns, stdConfig);

  return Standard;

};
