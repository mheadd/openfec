const client = require('./api-client');

exports.search = (params, callback) => {
	let path = '/schedules/schedule_a/';
	client.makeApiCall(path, params, callback);
};

exports.searchByContributor = (params, callback) => {
	let path = '/schedules/schedule_a/by_contributor/';
	client.makeApiCall(path, params, callback);
};

exports.searchBySize = (params, callback) => {
	let path = '/schedules/schedule_a/by_size/';
	client.makeApiCall(path, params, callback);
};

exports.searcByState = (params, callback) => {
	let path = '/schedules/schedule_a/by_state/';
	client.makeApiCall(path, params, callback);
};

exports.SearchByZip = (params, callback) => {
	let path = '/schedules/schedule_a/by_zip/';
	client.makeApiCall(path, params, callback);
};
