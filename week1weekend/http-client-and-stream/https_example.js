var https = require(`https`);

var options = {
    host: `www.google.com`,
    path: `/`
};

// called by https when the request is made
var callback = function() {
    console.log(`In response handler callback!`);
};

console.log(`I'm about to make the request!`);

https.request(options, callback).end();

console.log(`I've made the request!`);
