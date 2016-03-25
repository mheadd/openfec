var openfec = require('../index.js');

var key = process.argv[2];
openfec.init(key);

openfec.candidate.search({name: 'Short', office: 'H', state: ['DE']}, function(error, status, response) {
	if(error) {
		console.log(error);
	}
	else if(status == '200') {
		var results = response.results;
		for(result in results) {
			console.log(results[result].principal_committees);
		}
	}
	else {
		console.log(JSON.stringify(response));
	}
});