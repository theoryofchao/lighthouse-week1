var fileToRead = process.argv[2];

const fs = require('fs');

fs.readFile(fileToRead, 'utf8', function(err, data) {
  if(err) {
    throw err;
  }
  console.log(data);
});
