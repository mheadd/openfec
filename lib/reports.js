const client = require('./api-client');

exports.list = (params, callback) => {
    let path = '/committee/' + params.committee_id + '/reports/';
    delete params.committee_id;
    client.makeApiCall(path, params, callback);
};

exports.totals = (params, callback) => {
    let path = '/committee/' + params.committee_id + '/totals/';
    client.makeApiCall(path, params, callback);
};

exports.committeeType =  (params, callback) => {
    let path = '/reports/' + params.committee_type;
    delete params.committee_type;
    client.makeApiCall(path, params, callback);
};
