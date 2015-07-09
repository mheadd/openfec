var openfec = require('../index.js');

var key = process.argv[2];
openfec.init(key);

openfec.reports.list({committee_id: "C00431445", year: ['2015']}, function(error, response) {
	if(error) {
		console.log(error);
	}
	else {
		var results = response.results;
		for(result in results) {
			console.log(results[result].pdf_url);
		}
	}
});