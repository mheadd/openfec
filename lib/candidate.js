const client = require('./api-client');

exports.details = (params) => {
    let path = '/candidate/' + params.candidate_id + '/';
    delete params.candidate_id;
    return client.makeApiCall(path, params);
};

exports.history = (params) => {
    let path = '/candidate/' + params.candidate_id + '/history/';
    delete params.candidate_id;
    return client.makeApiCall(path, params);
};

exports.historyForCycle = (params) => {
    let path = '/candidate/' + params.candidate_id + '/history/' + params.cycle;
    delete params.candidate_id;
    delete params.cycle;
    return client.makeApiCall(path, params);
};

exports.listAll = (params) => {
    let path = '/candidates/';
    return client.makeApiCall(path, params);
};

exports.search = (params) => {
    let path = '/candidates/search/';
    return client.makeApiCall(path, params);
};

exports.searchByName = (params) => {
	  let path = '/names/candidates/'
	  return client.makeApiCall(path, params);
};

exports.committees = (params) => {
    let path = '/committee/' + params.committee_id + '/candidates/';
    delete params.committee_id;
    return client.makeApiCall(path, params);
};

exports.committeesHistory = (params) => {
    let path = '/committee/' + params.committee_id + '/candidates/history/';
    delete params.committee_id;
    return client.makeApiCall(path, params);
};

exports.committeesHistoryForCycle = (params) => {
    let path = '/committee/' + params.committee_id + '/candidates/history/' + params.cycle;
    delete params.committee_id;
    delete params.cycle;
    return client.makeApiCall(path, params);
};
