module.exports = function(sequelize, DataTypes){

  var streamColumns = {
    name : DataTypes.STRING
  };

  var streamConfig = {
    classMethods: {}
  };

  var Streams = sequelize.define("Stream", streamColumns, streamConfig);

  return Streams;

};
