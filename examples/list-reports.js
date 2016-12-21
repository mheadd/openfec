const openfec = require('../index.js');

openfec.init(process.argv[2]);

openfec.reports.list({committee_id: "C00431445", year: ['2015']})
	.then((response) => {
		for(result in response.results) {
			console.log(response.results[result].pdf_url);
		}
	})
	.catch((error) => {
		console.log(error);
	}
);
