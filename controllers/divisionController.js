var models = require('../models');

var controller = {
	getAll : function(cb,errcb) {
		return models.Division.findAll({})
		.then(cb).error(errcb);
	},
	
	add : function(division,cb,errcb) {
		var newDivision = models.Division.build(division);
		return newDivision.save()
		.then(cb).error(errcb);
	},

	update : function(id,updatedDivision,cb,errcb) {
		return models.Division.update(updatedDivision,{where: { id : id }})
		.then(cb).error(errcb);
	},

	delete : function(id,cb,errcb) {
		return models.Division.destroy({where: {id : id}})
		.then(cb).error(errcb);
	}

};

module.exports = controller;