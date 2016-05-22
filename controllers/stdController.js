var models = require('../models');

var controller = {
	getAll : function(cb,errcb) {
		return models.Standard.findAll({})
		.then(cb).error(errcb);
	},
	
	add : function(standard,cb,errcb) {
		var newStandard = models.Standard.build(standard);
		return newStandard.save()
		.then(cb).error(errcb);
	},

	update : function(id,updatedStandard,cb,errcb) {
		return models.Standard.update(updatedStandard,{where: { id : id }})
		.then(cb).error(errcb);
	},

	delete : function(id,cb,errcb) {
		return models.Standard.destroy({where: {id : id}})
		.then(cb).error(errcb);
	}

};

module.exports = controller;