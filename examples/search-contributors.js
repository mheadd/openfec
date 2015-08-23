var openfec = require('../index.js');

var key = process.argv[2];
openfec.init(key);

openfec.schedules.search({contributor_name: "Congel", per_page: 1}, function(error, response) {
	if(error) {
		console.log(error);
	}
	else {
		var response = response.results; 
		console.log(JSON.stringify(response[0]));
	}
});