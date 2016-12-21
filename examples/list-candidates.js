const openfec = require('../index.js');

openfec.init(process.argv[2]);

openfec.candidate.listAll({per_page: 10, incumbent_challenge: ['I']})
	.then((response) => {
		for(result in response.results) {
			console.log(response.results[result].name);
		};
	})
	.catch((error) => {
		console.log(error);
	}
);
