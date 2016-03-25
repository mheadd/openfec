var openfec = require('../index.js');

var key = process.argv[2];
openfec.init(key);

openfec.reports.list({committee_id: "C00431445", year: ['2015']}, function(error, status, response) {
	if(error) {
		console.log(error);
	}
	else if(status == '200') {
		var results = response.results;
		for(result in results) {
			console.log(results[result].pdf_url);
		}
	}
	else {
		console.log(JSON.stringify(response));
	}
});