const openfec = require('../index.js');

openfec.init(process.argv[2]);

openfec.schedules.search({contributor_name: "Congel"})
	.then((response) => {
		console.log(response.results[0]);
	})
	.catch((error) => {
		console.log(error);
	}
);
