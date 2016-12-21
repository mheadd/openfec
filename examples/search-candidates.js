const openfec = require('../index.js');

openfec.init(process.argv[2]);

openfec.candidate.search({name: 'Short', office: 'H', state: ['DE']})
	.then((response) => {
		for(result in response.results) {
			console.log(response.results[result].principal_committees);
		}
	})
	.catch((error) => {
		console.log(error);
	}
);
