const openfec = require('../index.js');

openfec.init(process.argv[2]);

openfec.candidate.search({name: 'Short', office: 'H', state: ['DE']}, function(error, status, response) {
	if(error) {
		console.log(error);
	}
	else if(status == '200') {
		for(result in response.results) {
			console.log(response.results[result].principal_committees);
		}
	}
	else {
		console.log(response);
	}
});
