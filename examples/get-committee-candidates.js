const openfec = require('../index.js');

openfec.init(kprocess.argv[2]ey);

openfec.candidate.committeesHistory({committee_id: "C00431445"}, function(error, status, response) {
	if(error) {
		console.log(error);
	}
	else if(status == '200') {
		for(result in response.results) {
			console.log(response.results[result].two_year_period);
		}
	}
	else {
		console.log(response);
	}
});
