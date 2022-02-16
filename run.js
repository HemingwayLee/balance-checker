const request = require('request');

request('https://api.xrpscan.com/api/v1/account/rQDKjHYX8tytLNJYY1rkVeqDqRFP1Mxaae', 
  function (error, response, body) {
    console.log(`XRP balance: ${JSON.parse(body)["xrpBalance"]}`);
    // console.log(body);
  }
);

request('https://blockchain.info/multiaddr?active=1AYPH5z2nXee5FkKBKvpYRTB2iZJRutTn2',
  function (error, response, body) {
    const balance = JSON.parse(body)["addresses"][0]["final_balance"];
    console.log(`BTC balance: ${parseFloat(balance)/100000000.0}`);
    // console.log(body);
  }
);

