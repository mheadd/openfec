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

Note - additional examples can be found in the [examples](tree/master/examples) directory.

#### Get Candidate Details

```javascript
openfec.candidate.details({candidate_id: "P40002172"}, function(error, response) {
	if(error) {
		console.log(error);
	}
	else {
		var response = response.results; 
		console.log(JSON.stringify(response[0]));
	}
});
```

Produces:

```json
{
  "state": "US",
  "party_full": "Independent",
  "party": "IND",
  "office_full": "President",
  "office": "P",
  "name": "AABBATTE, MICHAEL THOMAS WITORT",
  "load_date": "2015-05-11T12:15:43+00:00",
  "incumbent_challenge_full": "Unknown",
  "candidate_inactive": null,
  "candidate_id": "P40002172",
  "address_zip": "60154",
  "address_street_2": null,
  "address_street_1": "1613 HEIDORN AVE",
  "address_state": "IL",
  "address_city": "WESTCHESTER",
  "active_through": 2004,
  "candidate_status": "N",
  "candidate_status_full": "Not yet a statutory candidate",
  "cycles": [
    2004
  ],
  "district": null,
  "election_years": [
    2004
  ],
  "expire_date": null,
  "form_type": "F2",
  "incumbent_challenge": null
}

```

#### List Committees

```javascript
openfec.committee.listAll({committee_type: ['H','S'], per_page: 5}, function(error, response) {
	if(error) {
		console.log(error);
	}
	else {
		var results = response.results;
		for(result in results) {
			console.log(results[result].name);
		}
	}
});
```
Produces:

```
10TH CONG DEMOCRATIC WOMEN POLITICAL ACTION FUND
12TH DISTRICT CITIZENS PARTY (PCC FOR TED KUHN)
12TH DISTRICT COMMITTEE FOR A NEW CONGRESSMAN-ROB HUTH CHAIRMAN
13TH CONGRESSIONAL DISTRICT EXPLORING COMMITTEE
1974 HORNE FOR CONGRESS COMMITTEE
```

#### List Reports

```javascript
openfec.reports.list({committee_id: "C00431445", year: ['2015']}, function(error, response) {
	if(error) {
		console.log(error);
	}
	else {
		var results = response.results;
		for(result in results) {
			console.log(results[result].pdf_url);
		}
	}
});
```

Produces:

```
http://docquery.fec.gov/pdf/194/15951162194/15951162194.pdf
```