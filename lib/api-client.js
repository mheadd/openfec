var https = require('https');

var API_KEY;
var URL_BASE = 'https://api.open.fec.gov/v1';

// Set up API key.
exports.init = function(key) {
	API_KEY = key;
};

// Method to make API call.
exports.makeApiCall = function(path, params, callback) {

    // Make sure API key is set.
    if(API_KEY === null) {
        callback('API Key must be set.', null);
    }

    // Assemble URL.
    var url = URL_BASE + path + '?api_key=' + API_KEY + buildQueryString(params);

    // Make API call.
    var body = '';
    https.get(url, function(res) {
        res.on('error', function(error){
            callback(error, null);
        });
        res.on('data', function(chunk) {
            body += chunk;
        });
        res.on('end', function() {
            callback(null, res.statusCode, JSON.parse(body));
        });
    });

};

// Utility function to build querystring parameters for API call.
function buildQueryString(params) {
    var querystring = '';
    for(param in params) {
        querystring += '&' + param + '=' + params[param];
    }
    return querystring;
}

