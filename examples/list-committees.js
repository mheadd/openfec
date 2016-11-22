const openfec = require('../index.js');

openfec.init(process.argv[2]);

openfec.committee.listAll({committee_type: ['H'], per_page: 3}, function(error, status, response) {
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
