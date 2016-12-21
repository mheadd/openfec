const openfec = require('../index.js');

openfec.init(process.argv[2]);

openfec.candidate.details({candidate_id: "H2LA05084"})
	.then((response) => {
		console.log(response.results);
	})
	.catch((error) => {
		console.log(error);
	}
);
