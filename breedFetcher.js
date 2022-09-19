const request = require('request');

const generalURL = "https://api.thecatapi.com/v1/breeds/search?q=";

const fetchBreedDescription = (breed, callback) => {

  const fullURL = generalURL + breed;

  request(fullURL, (error, response, body) => {

    if (error) {
      callback("Error: ", null);
    }

    if (Number(response.statusCode) > 299) {
      callback("Error: ", null);
    }

    if (!body) {
      callback("No information on this breed.", null);
    }

    const data = JSON.parse(body);
    const breedInfo = data[0]['description'];

    if (breedInfo) (
      callback(null, breedInfo)
    );

  });
};

// fetchBreedDescription('Siberian');

module.exports = { fetchBreedDescription };