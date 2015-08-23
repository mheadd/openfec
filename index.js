var client = require('./lib/api-client');
var candidate = require('./lib/candidate');
var committee = require('./lib/committee');
var reports = require('./lib/reports');
var schedules = require('./lib/schedules');

module.exports = {
    init: function(key) {
        client.init(key);
    },
    candidate: candidate,
    committee: committee,
    reports: reports,
    schedules: schedules
};