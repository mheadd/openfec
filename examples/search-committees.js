const openfec = require('../index.js');

openfec.init(process.argv[2]);

openfec.committee.searchByName({q: 'Carney'})
	.then((response) => {
		for(result in response.results) {
			console.log(response.results[result].name);
		}
	})
	.catch((error) => {
		console.log(error);
	}
);
