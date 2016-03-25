var openfec = require('../index.js');

var key = process.argv[2];
openfec.init(key);

openfec.schedules.search({contributor_name: "Congel",}, function(error, status, response) {
	if(error) {
		console.log(error);
	}
	else if(status == '200') {
		console.log(response.results[0]);
	}
	else {
		console.log(JSON.stringify(response));
	}
});