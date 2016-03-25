var openfec = require('../index.js');

var key = process.argv[2];
openfec.init(key);

openfec.committee.searchByName({q: 'Carney'}, function(error, status, response) {
	if(error) {
		console.log(error);
	}
	else if(status == '200') {
		var results = response.results;
		for(result in results) {
			console.log(results[result].name);
		}
	}
	else {
		console.log(JSON.stringify(response));
	}
});