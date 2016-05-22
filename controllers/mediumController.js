var models = require('../models');

var controller = {
	getAll : function(cb,errcb) {
		return models.Medium.findAll({})
		.then(cb).error(errcb);
	},
	
	add : function(medium,cb,errcb) {
		var newMedium = models.Medium.build(medium);
		return newMedium.save()
		.then(cb).error(errcb);
	},

	update : function(id,updatedMedium,cb,errcb) {
		return models.Medium.update(updatedMedium,{where: { id : id }})
		.then(cb).error(errcb);
	},

	delete : function(id,cb,errcb) {
		return models.Medium.destroy({where: {id : id}})
		.then(cb).error(errcb);
	}

};

module.exports = controller;