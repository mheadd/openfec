module.exports = {
    init: (key) => require('./lib/api-client').init(key),
    candidate: require('./lib/candidate'),
    committee: require('./lib/committee'),
    reports: require('./lib/reports'),
    schedules: require('./lib/schedules')
};
