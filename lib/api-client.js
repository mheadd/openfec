const https = require('https');
const URL_BASE = 'https://api.open.fec.gov/v1';

let API_KEY;

// Set up API key.
exports.init = (key) => { API_KEY = key };

// Method to make API call.
exports.makeApiCall = (path, params, callback) => {

    // Make sure API key is set.
    if(API_KEY === null) {
        callback('API Key must be set.', null);
    }

    // Assemble URL.
    let url = URL_BASE + path + '?api_key=' + API_KEY + buildQueryString(params);

    // Make API call.
    let body = '';
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
let buildQueryString = (params) => {
    let querystring = '';
    for(param in params) {
        querystring += '&' + param + '=' + params[param];
    }
    return querystring;
}
