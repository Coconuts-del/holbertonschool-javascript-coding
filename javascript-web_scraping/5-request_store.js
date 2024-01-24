#!/usr/bin/node
const request = require('request');
request(process.argv[2], (error, response, body) => {
  const fs = require('fs');
  if (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
  fs.writeFile(process.argv[3], body, 'utf-8', (err) => {
    if (err) { console.error(err); }
  });
});
