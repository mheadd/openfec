# OpenFEC

Wrapper for the OpenFEC API. Documentation for this API can be found [here](https://api.open.fec.gov/developers).

## Installation

```
npm install openfec
```

## Usage

Obtain an API key [here](https://api.data.gov/signup/). When you have a key, initialize an OpenFEC client like this:

```javascript
openfec.init('your-api-key');
```

## Examples

Note - additional examples can be found in the [examples](examples) directory.

#### Get Candidate Details

```javascript
openfec.candidate.details({candidate_id: "H2LA05084"})
	.then((response) => {
		console.log(response.results);
	})
	.catch((error) => {
		console.log(error);
	}
);
```

Produces:

```javascript
[ { load_date: '2013-05-28T22:18:11',
    flags: 'H2LA05084',
    name: 'ALEXANDER, RODNEY M. MR.',
    address_street_2: null,
    candidate_inactive: false,
    office: 'H',
    incumbent_challenge: 'I',
    incumbent_challenge_full: 'Incumbent',
    election_districts: [ '05', '05', '05', '05', '05', '05', '05' ],
    address_city: 'QUITMAN',
    address_zip: '71268',
    party_full: 'REPUBLICAN PARTY',
    address_state: 'LA',
    district: '05',
    has_raised_funds: true,
    candidate_id: 'H2LA05084',
    candidate_status: 'C',
    cycles: [ 2002, 2004, 2006, 2008, 2010, 2012, 2014 ],
    active_through: 2014,
    address_street_1: '319 NANCY\'S ROAD',
    office_full: 'House',
    party: 'REP',
    state: 'LA',
    federal_funds_flag: false,
    election_years: [ 2002, 2004, 2006, 2008, 2010, 2012, 2014 ],
    district_number: 5 } ]

```

#### List Committees

```javascript
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
```
Produces:

```
10TH CONG DEMOCRATIC WOMEN POLITICAL ACTION FUND
12TH DISTRICT CITIZENS PARTY (PCC FOR TED KUHN)
12TH DISTRICT COMMITTEE FOR A NEW CONGRESSMAN-ROB HUTH CHAIRMAN
```

#### List Reports

```javascript
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
```

Produces:

```
http://docquery.fec.gov/pdf/381/201601319005191381/201601319005191381.pdf
http://docquery.fec.gov/pdf/933/201510159002900933/201510159002900933.pdf
http://docquery.fec.gov/pdf/185/201507159000148185/201507159000148185.pdf
http://docquery.fec.gov/pdf/194/15951162194/15951162194.pdf
```
