const https = require('https');
const URL_BASE = 'https://api.open.fec.gov/v1';

let API_KEY;

// Set up API key.
exports.init = (key) => { API_KEY = key };

// Method to make API call.
exports.makeApiCall = (path, params) => {

    // Assemble URL.
    let url = URL_BASE + path + '?api_key=' + API_KEY + buildQueryString(params);

    // Make API call.
    return new Promise((resolve, reject) => {

      // Make sure API key is set.
      if(!API_KEY) {
          reject(new Error('API Key must be set'));
      }

      https.get(url, function(res) {
          res.on('error', function(error){
              reject(error);
          });
          let body = '';
          res.on('data', function(chunk) {
              body += chunk;
          });
          res.on('end', function() {
              resolve(JSON.parse(body));
          });
      });
    })

};

// Utility function to build querystring parameters for API call.
let buildQueryString = (params) => {
    let querystring = '';
    for(param in params) {
        querystring += '&' + param + '=' + params[param];
    }
    return querystring;
}
