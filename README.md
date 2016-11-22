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
openfec.candidate.details({candidate_id: "H2LA05084"}, function(error, status, response) {
	if(error) {
		console.log(error);
	}
	else if(status == '200') {
		console.log(response.results);
	}
	else {
		console.log(response);
	}
});
```

Produces:

```javascript
[ { incumbent_challenge: 'I',
    federal_funds_flag: false,
    load_date: '2013-05-28T22:18:11',
    party: 'REP',
    election_years: [ 2002, 2004, 2006, 2008, 2010, 2012, 2014 ],
    flags: 'H2LA05084',
    candidate_inactive: false,
    office_full: 'House',
    election_districts: [ '05', '05', '05', '05', '05', '05', '05' ],
    has_raised_funds: true,
    name: 'ALEXANDER, RODNEY M. MR.',
    address_city: 'QUITMAN',
    address_state: 'LA',
    address_street_1: '319 NANCY\'S ROAD',
    candidate_status: 'C',
    cycles: [ 2002, 2004, 2006, 2008, 2010, 2012, 2014 ],
    office: 'H',
    party_full: 'Republican Party',
    candidate_id: 'H2LA05084',
    address_street_2: null,
    incumbent_challenge_full: 'Incumbent',
    district: '05',
    district_number: 5,
    state: 'LA',
    address_zip: '71268',
    active_through: 2014 } ]

```

#### List Committees

```javascript
openfec.committee.listAll({committee_type: ['H'], per_page: 3}, function(error, status, response) {
  if(error) {
    console.log(error);
  }
  else if(status == '200') {
    var results = response.results;
    for(result in results) {
      console.log(results[result].name);
    }
  }
  else {
    console.log(JSON.stringify(response));
  }
});
```
Produces:

```
10TH CONG DEMOCRATIC WOMEN POLITICAL ACTION FUND
12TH DISTRICT CITIZENS PARTY (PCC FOR TED KUHN)
12TH DISTRICT COMMITTEE FOR A NEW CONGRESSMAN-ROB HUTH CHAIRMAN
```

#### List Reports

```javascript
openfec.reports.list({committee_id: "C00431445", year: ['2015']}, function(error, status, response) {
  if(error) {
    console.log(error);
  }
  else if(status == '200') {
    var results = response.results;
    for(result in results) {
      console.log(results[result].pdf_url);
    }
  }
  else {
    console.log(JSON.stringify(response));
  }
});
```

Produces:

```
http://docquery.fec.gov/pdf/381/201601319005191381/201601319005191381.pdf
http://docquery.fec.gov/pdf/933/201510159002900933/201510159002900933.pdf
http://docquery.fec.gov/pdf/185/201507159000148185/201507159000148185.pdf
http://docquery.fec.gov/pdf/194/15951162194/15951162194.pdf
```
