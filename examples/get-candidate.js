var openfec = require('../index.js');

var key = process.argv[2];
openfec.init(key);

openfec.candidate.details({candidate_id: "P40002172"}, function(error, status, response) {
	if(error) {
		console.log(error);
	}
	else if(status == '200') {
		var response = response.results; 
		console.log(JSON.stringify(response[0]));
	}
	else {
		console.log(JSON.stringify(response));
	}
});