module.exports = function(sequelize, DataTypes){

  var boardColumns = {
    boardID : DataTypes.INTEGER,
    name : DataTypes.STRING
  };

  var boardConfig = {
    classMethods: {}
  };

  var board = sequelize.define("Board", boardColumns, boardConfig);

  return board;

};
