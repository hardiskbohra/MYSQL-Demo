module.exports = function(sequelize, DataTypes){

  var boardColumns = {
    name : DataTypes.STRING
  };

  var boardConfig = {
    classMethods: {}
  };

  var Board = sequelize.define("Board", boardColumns, boardConfig);

  return Board;

};
