module.exports = function(sequelize, DataTypes){

  var divisionColumns = {
    name : DataTypes.STRING
  };

  var divisionConfig = {
    classMethods: {}
  };

  var Division = sequelize.define("Division", divisionColumns, divisionConfig);

  return Division;

};
