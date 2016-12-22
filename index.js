const client = require('./lib/api-client');
const candidate = require('./lib/candidate');
const committee = require('./lib/committee');
const reports = require('./lib/reports');
const schedules = require('./lib/schedules');

module.exports = {
    init: (key) => {
        client.init(key);
    },
    candidate: candidate,
    committee: committee,
    reports: reports,
    schedules: schedules
};
