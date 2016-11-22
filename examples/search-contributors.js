const openfec = require('../index.js');

openfec.init(process.argv[2]);

openfec.schedules.search({contributor_name: "Congel",}, function(error, status, response) {
	if(error) {
		console.log(error);
	}
	else if(status == '200') {
		console.log(response.results[0]);
	}
	else {
		console.log(response);
	}
});
