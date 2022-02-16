const request = require('request');

request('https://api.xrpscan.com/api/v1/account/rQDKjHYX8tytLNJYY1rkVeqDqRFP1Mxaae', 
  function (error, response, body) {
    console.log(`XRP balance: ${JSON.parse(body)["xrpBalance"]}`);
    // console.log(body);
  }
);

