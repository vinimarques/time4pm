// Configurations
var config = require('../config');
var axios = require('axios');

var Api = {
	instance: axios.create({
		baseURL: 'https://' + config.apiurl,
		headers: {
			"Authorization": "BASIC " + config.key
		}
	})
};

Api.getUser = function ( callback ) {
	this.instance.get('me.json')
		.then(res => {
			let person = res.data.person;
			callback && callback(person);
	  });
};

Api.getProjects = function ( callback ) {
	this.instance.get('projects.json?orderby=companyName')
		.then(res => {
			let projects = res.data.projects.map(function (project) {
				return {
					value: parseInt(project.id),
					label: project.name
				};
			});
			callback && callback(projects);
	  });
};

Api.getTasks = function ( projectId , callback ) {
	this.instance.get('projects/' + projectId + '/tasks.json?filter=all')
		.then(res => {
			let tasks = res.data['todo-items'].map(function (task) {
				return {
					value: parseInt(task.id),
					label: task.content
				};
			});
			callback && callback(tasks);
	  });
};

module.exports = Api;
