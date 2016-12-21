const client = require('./api-client');

exports.search = (params) => {
	let path = '/schedules/schedule_a/';
	return client.makeApiCall(path, params);
};

exports.searchByContributor = (params) => {
	let path = '/schedules/schedule_a/by_contributor/';
	return client.makeApiCall(path, params);
};

exports.searchBySize = (params) => {
	let path = '/schedules/schedule_a/by_size/';
	return client.makeApiCall(path, params);
};

exports.searcByState = (params) => {
	let path = '/schedules/schedule_a/by_state/';
	return client.makeApiCall(path, params);
};

exports.SearchByZip = (params) => {
	let path = '/schedules/schedule_a/by_zip/';
	return client.makeApiCall(path, params);
};
