#!/usr/bin/node
const request = require('request');
request(process.argv[2], (error, response, body) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
  const Movies = JSON.parse(body).results.filter((film) =>
    film.characters.includes('https://swapi-api.hbtn.io/api/people/18/')
  );
  // Display the number of movies where WedgeAntilles is present
  console.log(Movies.length);
});
