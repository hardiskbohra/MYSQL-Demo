var models = require('../models');

var controller = {
	getAll : function(cb,errcb) {
		return models.Subject.findAll({})
		.then(cb).error(errcb);
	},
	
	add : function(subject,cb,errcb) {
		var newSubject = models.Subject.build(subject);
		return newSubject.save()
		.then(cb).error(errcb);
	},

	update : function(id,updatedSubject,cb,errcb) {
		return models.Subject.update(updatedSubject,{where: { id : id }})
		.then(cb).error(errcb);
	},

	delete : function(id,cb,errcb) {
		return models.Subject.destroy({where: {id : id}})
		.then(cb).error(errcb);
	}

};

module.exports = controller;