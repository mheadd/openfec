var client = require('./api-client');

exports.details = function (params, callback) {
    var path = '/candidate/' + params.candidate_id + '/';
    delete params.candidate_id;
    client.makeApiCall(path, params, callback);
};

exports.history = function (params, callback) {
    var path = '/candidate/' + params.candidate_id + '/history/';
    delete params.candidate_id;
    client.makeApiCall(path, params, callback);
};

exports.historyForCycle = function (params, callback) {
    var path = '/candidate/' + params.candidate_id + '/history/' + params.cycle;
    delete params.candidate_id;
    delete params.cycle;
    client.makeApiCall(path, params, callback);
};

exports.listAll = function (params, callback) {
    var path = '/candidates/';
    client.makeApiCall(path, params, callback);
};

exports.search = function (params, callback) {
    var path = '/candidates/search/';
    client.makeApiCall(path, params, callback);
};

exports.searchByName = function (params, callback) {
	var path = '/names/candidates/'
	client.makeApiCall(path, params, callback);
};

exports.committees = function (params, callback) {
    var path = '/committee/' + params.committee_id + '/candidates/';
    delete params.committee_id;
    client.makeApiCall(path, params, callback);
};

exports.committeesHistory = function (params, callback) {
    var path = '/committee/' + params.committee_id + '/candidates/history/';
    delete params.committee_id;
    client.makeApiCall(path, params, callback);
};

exports.committeesHistoryForCycle = function (params, callback) {
    var path = '/committee/' + params.committee_id + '/candidates/history/' + params.cycle;
    delete params.committee_id;
    delete params.cycle;
    client.makeApiCall(path, params, callback);
};