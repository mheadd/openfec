const openfec = require('../index.js');

openfec.init(process.argv[2]);

openfec.reports.list({committee_id: "C00431445", year: ['2015']}, function(error, status, response) {
	if(error) {
		console.log(error);
	}
	else if(status == '200') {
		for(result in response.results) {
			console.log(response.results[result].pdf_url);
		}
	}
	else {
		console.log(response);
	}
});
