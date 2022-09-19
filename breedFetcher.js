const request = require('request');

const generalURL = "https://api.thecatapi.com/v1/breeds/search?q=";

const breedFetcher = (breed) => {

  const fullURL = generalURL + breed;

  request(fullURL, (error, response, body) => {

    if (error) {
      console.log("Error: ", error);
    }

    if (Number(response.statusCode) > 299) {
      console.log("Status code error: ", response.statusCode);
    }

    if (!body) {
      console.log("No information on this breed.");
    }

    const data = JSON.parse(body);
    const breedInfo = data[0]['description'];

    if (breedInfo) (
      console.log(breedInfo)
    );

  });
};

breedFetcher('Siberian');