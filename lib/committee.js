var client = require('./api-client');

exports.details = function (params, callback) {
	var path = '/committee/' + params.commitee_id;
	delete params.commitee_id;
    client.makeApiCall(path, params, callback);
};

exports.history = function (params, callback) {
	var path = '/committee/' + params.commitee_id + '/history';
	delete params.commitee_id;
    client.makeApiCall(path, params, callback);
};

exports.historyForCycle = function (params, callback) {
	var path = '/committee/' + params.commitee_id; + '/history' + params.cycle
	delete params.commitee_id;
	delete params.cycle;
    client.makeApiCall(path, params, callback);
};

exports.listAll = function (params, callback) {
    var path = '/committees';
    client.makeApiCall(path, params, callback);
};

exports.searchByName = function (params, callback) {
	var path = '/names/committees'
	client.makeApiCall(path, params, callback);
};