#!/usr/bin/node
const request = require('request');
request(process.argv[2], (error, response, body) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }

  let nbFilms = 0;
  const films = JSON.parse(body).results;
  for (const film of films) {
    for (const character of film.characters) {
      if (character.includes('/18')) {
        nbFilms++;
      }
    }
  }

  // Display the number of movies where WedgeAntilles is present
  console.log(nbFilms);
});
