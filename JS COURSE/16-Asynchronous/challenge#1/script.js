'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
};
const renderCountry = function (data, className = '') {
  console.log(className, data);
  const html = `<article class="country ${className}">
         <img class="country__img" src="${data.flags.svg}" />
         <div class="country__data">
           <h3 class="country__name">${data.name?.common}</h3>
           <h4 class="country__region">${data.region}</h4>
           <p class="country__row"><span>👫</span>${(
             +data.population / 1000000
           ).toFixed(1)}</p>
          <p class="country__row"><span>🗣️</span>${
            Object.values(data.languages)[0]
          }</p>
          <p class="country__row"><span>💰</span>${
            Object.values(data.currencies)[0].name
          }</p>
        </div>
      </article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  // countriesContainer.style.opacity = 1;
};
const getJSON = function (url, errorMsg) {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
    return response.json();
  });
};
const geyCountryData = function (country) {
  getJSON(`https://restcountries.com/v3.1/name/${country}`, `Country not found`)
    .then(data => {
      renderCountry(data[0]);
      const nighbour = data[0].borders?.[0];
      console.log(nighbour);
      if (!nighbour) return;
      return getJSON(
        `https://restcountries.com/v3.1/alpha/${nighbour}`,
        'Country not found'
      );
    })
    .then(data => renderCountry(data[0], 'neighbour'))
    .catch(err => {
      console.error(`${err}`);
      renderError(`Somthing went Wrong 💥💥 ${err.message},Try Again`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

const whereAmI = function (lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}}?geoit=json`)
    .then(response => {
      if (!response.ok)
        throw new Error(`proplem with geocoding ${response.status}`);
      response.json();
    })
    .then(data => {
      const data1 = data;
      console.log(data);
      console.log(` You are in ${data1.city} ${data1.country}`);
      geyCountryData(data1.country);
    })
    .catch(err => console.log(`somthing went wrong ${err}`));
  // .then(data => console.log(data));

  // console.log(x);
};
whereAmI(52.508, 13.3);
