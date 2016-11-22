const client = require('./api-client');

exports.details = (params, callback) => {
	let path = '/committee/' + params.commitee_id;
	delete params.commitee_id;
    client.makeApiCall(path, params, callback);
};

exports.history = (params, callback) => {
	let path = '/committee/' + params.commitee_id + '/history/';
	delete params.commitee_id;
    client.makeApiCall(path, params, callback);
};

exports.historyForCycle = (params, callback) => {
	let path = '/committee/' + params.commitee_id; + '/history/' + params.cycle
	delete params.commitee_id;
	delete params.cycle;
    client.makeApiCall(path, params, callback);
};

exports.listAll = (params, callback) => {
  let path = '/committees/';
  client.makeApiCall(path, params, callback);
};

exports.searchByName = (params, callback) => {
	let path = '/names/committees/'
	client.makeApiCall(path, params, callback);
};

exports.communicationCosts = (params, callback) => {
	let path = '/committee/' + params.commitee_id + '/communication_costs/by_candidate/';
	delete params.commitee_id;
    client.makeApiCall(path, params, callback);
};

exports.electioneeringCosts = (params, callback) => {
	let path = '/committee/' + params.commitee_id + '/electioneering_costs/by_candidate/';
	delete params.commitee_id;
    client.makeApiCall(path, params, callback);
};
