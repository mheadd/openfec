const client = require('./api-client');

exports.details = (params, callback) => {
    let path = '/candidate/' + params.candidate_id + '/';
    delete params.candidate_id;
    client.makeApiCall(path, params, callback);
};

exports.history = (params, callback) => {
    let path = '/candidate/' + params.candidate_id + '/history/';
    delete params.candidate_id;
    client.makeApiCall(path, params, callback);
};

exports.historyForCycle = (params, callback) => {
    let path = '/candidate/' + params.candidate_id + '/history/' + params.cycle;
    delete params.candidate_id;
    delete params.cycle;
    client.makeApiCall(path, params, callback);
};

exports.listAll = (params, callback) => {
    let path = '/candidates/';
    client.makeApiCall(path, params, callback);
};

exports.search = (params, callback) => {
    let path = '/candidates/search/';
    client.makeApiCall(path, params, callback);
};

exports.searchByName = (params, callback) => {
	  let path = '/names/candidates/'
	  client.makeApiCall(path, params, callback);
};

exports.committees = (params, callback) => {
    let path = '/committee/' + params.committee_id + '/candidates/';
    delete params.committee_id;
    client.makeApiCall(path, params, callback);
};

exports.committeesHistory = (params, callback) => {
    let path = '/committee/' + params.committee_id + '/candidates/history/';
    delete params.committee_id;
    client.makeApiCall(path, params, callback);
};

exports.committeesHistoryForCycle = (params, callback) => {
    let path = '/committee/' + params.committee_id + '/candidates/history/' + params.cycle;
    delete params.committee_id;
    delete params.cycle;
    client.makeApiCall(path, params, callback);
};
