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
			const person = res.data.person;
			callback && callback(person);
	  });
};

module.exports = Api;
