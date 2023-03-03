'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

//////////////////////////////////////////
// AUTH Code 576707058067058397448x68696
// Reverse Geocoding address https://geocode.xyz/51.50354,-0.12768?geoit=xml&auth=your_api_key

fetch(
  'https://geocode.xyz/28.65553,77.23165?geoit=json&auth=576707058067058397448x68696'
)
  .then(response => {
    if (response.status === 403)
      throw new Error(`You are being rate limited (${response.status})`);
    return response.json();
  })
  .then(data => console.log(`You are in ${data.region}`))
  .catch(error => console.error(error));
