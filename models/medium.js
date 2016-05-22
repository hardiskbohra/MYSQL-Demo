module.exports = function(sequelize, DataTypes){

  var mediumColumns = {
    name : DataTypes.STRING
  };

  var mediumConfig = {
    classMethods: {}
  };

  var Medium = sequelize.define("Medium", mediumColumns, mediumConfig);

  return Medium;

};
