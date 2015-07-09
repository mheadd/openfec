var client = require('./api-client');

exports.list = function (params, callback) {
    var path = '/committee/' + params.committee_id + '/reports';
    delete params.committee_id;
    client.makeApiCall(path, params, callback);
};

exports.totals = function (params, callback) {
    var path = '/committee/' + params.committee_id + '/totals';
    client.makeApiCall(path, params, callback);
};

exports.committeeType = function (params, callback) {
    var path = '/reports/' + params.committee_type;
    delete params.committee_type;
    client.makeApiCall(path, params, callback);
};

