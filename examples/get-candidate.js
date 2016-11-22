const openfec = require('../index.js');

openfec.init(process.argv[2]);

openfec.candidate.details({candidate_id: "H2LA05084"}, function(error, status, response) {
	if(error) {
		console.log(error);
	}
	else if(status == '200') {
		console.log(response.results);
	}
	else {
		console.log(response);
	}
});
