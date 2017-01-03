const client = require('./api-client');

exports.details = (params) => {
	let path = `/committee/${params.commitee_id}`;
	delete params.commitee_id;
  return client.makeApiCall(path, params);
};

exports.history = (params) => {
	let path = `/committee/${params.commitee_id}/history/`;
	delete params.commitee_id;
  return client.makeApiCall(path, params);
};

exports.historyForCycle = (params) => {
	let path = `/committee/${params.commitee_id}/history/${params.cycle}`
	delete params.commitee_id;
	delete params.cycle;
  return client.makeApiCall(path, params);
};

exports.listAll = (params) => {
  let path = '/committees/';
  return client.makeApiCall(path, params);
};

exports.searchByName = (params) => {
	let path = '/names/committees/'
	return client.makeApiCall(path, params);
};

exports.communicationCosts = (params) => {
	let path = `/committee/${params.commitee_id}/communication_costs/by_candidate/`;
	delete params.commitee_id;
  return client.makeApiCall(path, params);
};

exports.electioneeringCosts = (params) => {
	let path = `/committee/${params.commitee_id}/electioneering_costs/by_candidate/`;
	delete params.commitee_id;
  return client.makeApiCall(path, params);
};
