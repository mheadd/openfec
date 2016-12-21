const openfec = require('../index.js');

openfec.init(process.argv[2]);

openfec.candidate.committeesHistory({committee_id: "C00431445"})
	.then((response) => {
		for(result in response.results) {
			console.log(response.results[result].two_year_period);
		}
	})
	.catch((error) => {
		console.log(error);
	}
);
