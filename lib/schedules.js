var client = require('./api-client');

exports.search = function(params, callback) {
	var path = '/schedules/schedule_a';
	client.makeApiCall(path, params, callback);
};

exports.searchByContributor = function(params, callback) {
	var path = '/schedules/schedule_a/by_contributor';
	client.makeApiCall(path, params, callback);
};

exports.searchBySize = function(params, callback) {
	var path = '/schedules/schedule_a/by_size';
	client.makeApiCall(path, params, callback);
};

exports.searcByState = function(params, callback) {
	var path = '/schedules/schedule_a/by_state';
	client.makeApiCall(path, params, callback);
};

exports.SearchByZip = function(params, callback) {
	var path = '/schedules/schedule_a/by_zip';
	client.makeApiCall(path, params, callback);
};