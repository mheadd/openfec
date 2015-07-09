var request = require('request');
var querystring = require('querystring');

var API_KEY;
var URL_BASE = 'https://api.open.fec.gov/v1';

// Set up API key.
exports.init = function(key) {
	API_KEY = key;
};

// Private method to make API call.
exports.makeApiCall = function(path, params, callback) {

    // Make sure API key is set.
    if(API_KEY === null) {
        callback('API Key must be set.', null);
    }

    // Assemble URL.
    var url = URL_BASE + path + '?api_key=' + API_KEY + '&' + querystring.stringify(params);

    // Make API call.
    request(url , function (error, response, body){
        if (error) {
            callback(error, null);
        }
        else if (response.statusCode == 200) {
            callback(null, JSON.parse(body));
        }
        else {
            callback('HTTP Response Code: ' + response.statusCode, null);
        }
	});
};