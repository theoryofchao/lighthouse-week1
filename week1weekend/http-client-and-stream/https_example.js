var https = require(`https`);

var options = {
    host: `www.mangastream.com`,
    path: `/`
};

// called by https when the request is made
var callback = function(response) {
    console.log(`In response handler callback!`);
    console.log(`Response: ${response}`);
    console.log(response);
};

console.log(`I'm about to make the request!`);

https.request(options, callback).end();

console.log(`I've made the request!`);
