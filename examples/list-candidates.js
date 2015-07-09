var openfec = require('../index.js');

var key = process.argv[2];
openfec.init(key);

openfec.candidate.listAll({per_page: 2, incumbent_challenge: ['I','O']}, function(error, response) {
	if(error) {
		console.log(error);
	}
	else {
		var results = response.results;
		for(result in results) {
			console.log(results[result].name);
		}
	}
});