const openfec = require('../index.js');

openfec.init(process.argv[2]);

openfec.committee.listAll({committee_type: ['H'], per_page: 3})
	.then((response) => {
		for(result in response.results) {
			console.log(response.results[result].name);
		}
	})
	.catch((error) => {
		console.log(error);
	}
);
