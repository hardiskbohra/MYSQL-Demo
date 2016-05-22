module.exports = function(sequelize, DataTypes){

  var subjectColumns = {
    name : DataTypes.STRING
  };

  var subjectConfig = {
    classMethods: {}
  };

  var Subject = sequelize.define("Subject", subjectColumns, subjectConfig);

  return Subject;

};
