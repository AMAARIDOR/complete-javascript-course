'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

//////////////////////////////////////////
// AUTH Code 576707058067058397448x68696
// Reverse Geocoding address https://geocode.xyz/-33.933,18.474?geoit=xml&auth=your_api_key

// const renderCountry = function (country) {
//   const html = `
//       <article class="country">
//       <img class="country__img" src="${country.flags.png}" />
//       <div class="country__data">
//         <h3 class="country__name">${country.name.common}</h3>
//         <h4 class="country__region">${country.region}</h4>
//         <p class="country__row"><span>👫</span>${country.population.toLocaleString()} people</p>
//         <p class="country__row"><span>🗣️</span>${Object.values(
//           country.languages
//         )}</p>
//         <p class="country__row"><span>💰</span>${Object.keys(
//           country.currencies
//         )}</p>
//       </div>
//     </article>`;

//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   countriesContainer.style.opacity = 1;
// };

// fetch(
//   'https://geocode.xyz/-33.933,18.474?geoit=json&auth=576707058067058397448x68696'
// )
//   .then(response => {
//     if (response.status === 403)
//       throw new Error(`You are being rate limited (${response.status})`);
//     return response.json();
//   })
//   .then(data => {
//     fetch(`https://restcountries.com/v3.1/name/${data.country}`)
//       .then(response => {
//         return response.json();
//       })
//       .then(data => {
//         renderCountry(data[0]);
//       })
//       .catch(error => console.error(error));
//   })
//   .catch(error => console.error(error));

// Promisifying
// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log('Lottery draw is happening');
//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve('You WIN');
//     } else {
//       reject(new Error('You lose your money'));
//     }
//   }, 2000);
// });
// // Promise consumption
// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// wait(2)
//   .then(() => {
//     console.log(`I waited for 2 seconds`);
//     return wait(1);
//   })
//   .then(() => console.log('I waited for 1 second'));

// Promise.resolve('abc').then(x => console.log(x));
// Promise.reject(new Error('abc')).catch(x => console.log(x));

//  const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// getPosition().then(pos => console.log(pos));

// const renderCountry = function (country) {
//   const html = `
//       <article class="country">
//       <img class="country__img" src="${country.flags.png}" />
//       <div class="country__data">
//         <h3 class="country__name">${country.name.common}</h3>
//         <h4 class="country__region">${country.region}</h4>
//         <p class="country__row"><span>👫</span>${country.population.toLocaleString()} people</p>
//         <p class="country__row"><span>🗣️</span>${Object.values(
//           country.languages
//         )}</p>
//         <p class="country__row"><span>💰</span>${Object.keys(
//           country.currencies
//         )}</p>
//       </div>
//     </article>`;

//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   countriesContainer.style.opacity = 1;
// };

// const whereAmI = function () {
//   getPosition()
//     .then(pos => {
//       const { latitude: lat, longitude: lng } = pos.coords;
//       return fetch(
//         `https://geocode.xyz/${lat},${lng}?geoit=json&auth=576707058067058397448x68696`
//       );
//     })
//     .then(response => {
//       if (response.status === 403)
//         throw new Error(`You are being rate limited (${response.status})`);
//       return response.json();
//     })
//     .then(data => {
//       fetch(`https://restcountries.com/v3.1/name/${data.country}`)
//         .then(response => {
//           return response.json();
//         })
//         .then(data => {
//           renderCountry(data[0]);
//         })
//         .catch(error => console.error(error));
//     })
//     .catch(error => console.error(error));
// };

// whereAmI();

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

let currentImg;

const createImage = function (imgPath) {
  return new Promise((resolve, reject) => {
    const image = document.createElement('img');
    image.src = `${imgPath}`;
    image.addEventListener('load', () => {
      document.querySelector('.images').append(image);
      resolve(image);
    });
    image.addEventListener('error', () => {
      reject(new Error("Image couldn't be loaded"));
    });
  });
};

createImage('img/img-1.jpg')
  .then(img => {
    currentImg = img;
    console.log('Image 1 Loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImage('img/img-2.jpg');
  })
  .then(img => {
    currentImg = img;
    console.log('Image 2 loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
  })
  .catch(err => console.log(err));
