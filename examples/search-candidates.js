var openfec = require('../index.js');

var key = process.argv[2];
openfec.init(key);

openfec.candidate.search({name: 'Obama', office: 'P'}, function(error, response) {
	if(error) {
		console.log(error);
	}
	else {
		var results = response.results;
		for(result in results) {
			console.log(results[result].principal_committees);
		}
	}
});