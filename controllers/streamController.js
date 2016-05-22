var models = require('../models');

var controller = {
	getAll : function(cb,errcb) {
		return models.Stream.findAll({})
		.then(cb).error(errcb);
	},
	
	add : function(stream,cb,errcb) {
		var newStream = models.Stream.build(stream);
		return newStream.save()
		.then(cb).error(errcb);
	},

	update : function(id,updatedStream,cb,errcb) {
		return models.Stream.update(updatedStream,{where: { id : id }})
		.then(cb).error(errcb);
	},

	delete : function(id,cb,errcb) {
		return models.Stream.destroy({where: {id : id}})
		.then(cb).error(errcb);
	}

};

module.exports = controller;