module.exports = function(sequelize, DataTypes){

  var acadYearColumns = {
    name : DataTypes.STRING
  };

  var acadYearConfig = {
    classMethods: {}
  };

  var AcadYear = sequelize.define("AcadYear", acadYearColumns, acadYearConfig);

  return AcadYear;

};
