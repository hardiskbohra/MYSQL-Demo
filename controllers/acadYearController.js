var models = require('../models');

var controller = {
	getAll : function(cb,errcb) {
		return models.AcadYear.findAll({})
		.then(cb).error(errcb);
	},
	
	add : function(acadYear,cb,errcb) {
		var newAcadYear = models.AcadYear.build(acadYear);
		return newAcadYear.save()
		.then(cb).error(errcb);
	},

	update : function(id,updatedAcadYear,cb,errcb) {
		return models.AcadYear.update(updatedAcadYear,{where: { id : id }})
		.then(cb).error(errcb);
	},

	delete : function(id,cb,errcb) {
		return models.AcadYear.destroy({where: {id : id}})
		.then(cb).error(errcb);
	}

};

module.exports = controller;