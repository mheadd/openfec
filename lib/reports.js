const client = require('./api-client');

exports.list = (params) => {
    let path = '/committee/' + params.committee_id + '/reports/';
    delete params.committee_id;
    return client.makeApiCall(path, params);
};

exports.totals = (params) => {
    let path = '/committee/' + params.committee_id + '/totals/';
    return client.makeApiCall(path, params);
};

exports.committeeType = (params) => {
    let path = '/reports/' + params.committee_type;
    delete params.committee_type;
    return client.makeApiCall(path, params);
};
