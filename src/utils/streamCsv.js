const fs = require('fs');

let data = '';

const readerStream = fs.createReadStream(`${__dirname}/data-set.csv`); // Create a readable stream

readerStream.setEncoding('UTF8'); // Set the encoding to be utf8.

// Handle stream events --> data, end, and error
readerStream.on('data', function (chunk) {
  console.log(chunk);
  data += chunk;
});

readerStream.on('end', function () {
  console.log("ACABAMOS");
});

readerStream.on('error', function (err) {
  console.log(err.stack);
});

