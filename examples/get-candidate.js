var openfec = require('../index.js');

var key = process.argv[2];
openfec.init(key);

openfec.candidate.details({candidate_id: "P40002172"}, function(error, response) {
	if(error) {
		console.log(error);
	}
	else {
		var response = response.results; 
		console.log(JSON.stringify(response[0]));
	}
});