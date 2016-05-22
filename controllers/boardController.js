var models = require('../models');

var controller = {
	getAll : function(cb,errcb) {
		return models.Board.findAll({})
		.then(cb).error(errcb);
	},
	
	add : function(board,cb,errcb) {
		var newBoard = models.Board.build(board);
		return newBoard.save()
		.then(cb).error(errcb);
	},

	update : function(id,updatedBoard,cb,errcb) {
		return models.Board.update(updatedBoard,{where: { id : id }})
		.then(cb).error(errcb);
	},

	delete : function(id,cb,errcb) {
		return models.Board.destroy({where: {id : id}})
		.then(cb).error(errcb);
	}

};

module.exports = controller;