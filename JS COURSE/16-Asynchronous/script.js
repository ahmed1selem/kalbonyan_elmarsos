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
/*
//////////////////////////////////////

// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();

//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();
//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     console.log(data.capital);
//     const html = `<article class="country">
//         <img class="country__img" src="${data.flags.svg}" />
//         <div class="country__data">
//           <h3 class="country__name">${data.name.common}</h3>
//           <h4 class="country__region">${data.region}</h4>
//           <p class="country__row"><span>👫</span>${(
//             +data.population / 1000000
//           ).toFixed(1)}</p>
//           <p class="country__row"><span>🗣️</span>${Object.values(
//             data.languages
//           )}</p>
//           <p class="country__row"><span>💰</span>${
//             Object.values(data.currencies)[0].name
//           }</p>
//         </div>
//       </article>`;
//     const { name } = data.currencies;
//     console.log();
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
//   const name = {
//     name: 'egypt',
//     numbe: 1221,
//   };
// };

// const getCountryAndNighbor = function (country) {
//   const request = new XMLHttpRequest();

//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();
//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     renderCountry(data);
//     const nighbour = data.borders?.[0];
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v3.1/alpha/${nighbour}`);
//     request2.send();
//     request2.addEventListener('load', function () {
//       const [data2] = JSON.parse(this.responseText);
//       console.log(data2, 'hay');
//       renderCountry(data2, 'neighbour');
//     });
//   });
// };
// getCountryAndNighbor('usa');

// const geyCountryData = function (country) {
//   const request = fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);
//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       const nighbour = data[0].borders?.[0];
//       console.log(nighbour);
//       if (!nighbour) return;
//       return fetch(`https://restcountries.com/v3.1/alpha/${nighbour}`);
//     })
//     .then(response => response.json())
//     .then(data => renderCountry(data[0], 'neighbour'))
//     .catch(err => {
//       console.error(`${err}`);
//       renderError(`Somthing went Wrong 💥💥 ${err.message},Try Again`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };
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
// btn.addEventListener('click', () => {
//   geyCountryData('pakistan');
// });
// geyCountryData('australia');
// console.log('Test start');
// setTimeout(() => console.log(`0 SEC timer `), 0);
// Promise.resolve('Resovled promised 1').then(res => console.log(res));
// Promise.resolve('Resovled promised 2').then(res => {
//   for (let i = 0; i < 10000; i++) console.log(res);
// });

// console.log('Test end ');

const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('lottar drew us happing 🔮');
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('You Win 💰');
    } else {
      reject(new Error('You lost your promise'));
    }
  }, 2000);
});
lotteryPromise.then(res => console.log(res)).catch(err => console.log(err));
const wait = function (sec) {
  return new Promise(function (resolve) {
    setTimeout(resolve, sec * 1000);
  });
};
wait(1)
  .then(() => {
    console.log('1 sec passed');
    return wait(1);
  })
  .then(() => {
    console.log('2 sec passed');
    return wait(1);
  })
  .then(() => {
    console.log('3 sec passed');
    return wait(1);
  })
  .then(() => {
    console.log('4 sec passed');
    return wait(1);
  })
  .then(() => console.log('5 sec passed'));
Promise.resolve('abc').then(x => console.log(x));
Promise.reject(new Error('problem')).then(x => console.error(x));
navigator.geolocation.getCurrentPosition(
  position => console.log(position),
  err => console.err(err)
);
// const getPosion = function () {
//   return new Promise(function (Resovled, reject) {
//     navigator.geolocation.getCurrentPosition(
//       position => Resovled(position),
//       err => reject(err)
//     );
//   });
// };
const getPosion = function () {
  return new Promise(function (Resovled, reject) {
    navigator.geolocation.getCurrentPosition(Resovled, reject);
  });
};
getPosion().then(pos => console.log(pos));
const whereAmI = function () {
  getPosion()
    .then(pos => {
      const { latitude: lat, longitude: lng } = pos.coords;
      return fetch(`https://geocode.xyz/${lat},${lng}}?geoit=json`);
    })

    .then(response => {
      console.log(response);
      if (!response.ok)
        throw new Error(`proplem with geocoding ${response.status}`);
      return response.json();
    })
    .then(data => {
      console.log(` You are in ${data.city} ${data.country}`);
      geyCountryData(data.country);
    })
    .catch(err => console.log(`somthing went wrong ${err}`));
};
btn.addEventListener('click', () => {
  whereAmI();
});
const getPosion = function () {
  return new Promise(function (Resovled, reject) {
    navigator.geolocation.getCurrentPosition(
      position => Resovled(position),
      err => reject(err)
    );
  });
};
const whereAmI = async function (country) {
  try {
    const pos = await getPosion();
    const { latitude: lat, longitude: lng } = pos.coords;

    // Reverse geocoding
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    if (!resGeo.ok) throw new Error('Problem getting location data');

    const dataGeo = await resGeo.json();

    // Country data
    const res = await fetch(
      `https://restcountries.eu/rest/v2/name/${dataGeo.country}`
    );
    if (!res.ok) throw new Error('Problem getting country');

    const data = await res.json();
    renderCountry(data);
    return `you are in ${dataGeo.city}, ${dataGeo.country}`;
  } catch (err) {
    console.error(` ${err} 💥`);
    renderError(`somthing went wrong 💥💥 ${err}`);
    throw err;
  }
};
console.log('i will get location ');
// const city = whereAmI();
// console.log(city);
// whereAmI().then(city => console.log(city)).catch(err=>console.log(`${err.message} 💥`)).finally(()=>console.log('3'););
console.log('yeah');
(async function () {
  try {
    const val = await whereAmI();
    console.log(val);
  } catch (err) {
    console.log(`${err.message} 💥`);
  }
  console.log('3');
})();
const get3Countries = async function (c1, c2, c3) {
  try {
    // const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
    // const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
    // const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);
    // console.log(data1.capital, data2.capital, data3.capital);
    const data = Promise.all(
      getJSON(`https://restcountries.com/v3.1/name/${c1}`),
      getJSON(`https://restcountries.com/v3.1/name/${c2}`),
      getJSON(`https://restcountries.com/v3.1/name/${c3}`)
    );
    console.log((await data).map(d => d[0].capital));
  } catch (err) {
    console.log(err);
  }
};
get3Countries('egypt', 'canda', 'usa');
*/
(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.com/v3.1/name/$italy`),
    getJSON(`https://restcountries.com/v3.1/name/$egypt`),
    getJSON(`https://restcountries.com/v3.1/name/$saudi`),
  ]);
});
// console.log(res[0]);
const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('requeat took too long'));
    }, sec * 1000);
  });
};
Promise.race([
  getJSON(`https://restcountries.com/v3.1/name/$italy`),
  timeout(1),
]).then(res => console.log(res[0]).catch(err => console.log(err)));

Promise.any([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Success'),
]);
