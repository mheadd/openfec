var openfec = require('../index.js');

var key = process.argv[2];
openfec.init(key);

openfec.committee.searchByName({q: 'Carney'}, function(error, response) {
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