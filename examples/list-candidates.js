const openfec = require('../index.js');

openfec.init(process.argv[2]);

openfec.candidate.listAll({per_page: 10, incumbent_challenge: ['I']}, function(error, status, response) {
	if(error) {
		console.log(error);
	}
	else if(status == '200') {
		for(result in response.results) {
			console.log(response.results[result].name);
		}
	}
	else {
		console.log(response);
	}
});
