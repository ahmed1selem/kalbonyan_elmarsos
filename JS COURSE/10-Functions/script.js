'use strict';
/*
const bookings = [];
const creatBooking = function (
  flightNUM,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  numPassengers = numPassengers || 1;
  const booking = {
    flightNUM,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
creatBooking('LM23');
creatBooking('LM23', 2, 800);
creatBooking('Lm3', undefined, 10);

const flight = 'LM234';
const jonas = {
  name: 'johan smach',
  passport: 2345321234,
};
const checkIn = function (flightNUM, passenger) {
  flightNUM = 'LM999';
  passenger.name = 'Mr.' + passenger.name;
  if (passenger.passport == 2345321234) {
    alert('check in');
  } else {
    alert('Worng Passport');
  }
// };
// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);
// const flightNUM = flight;
// const passenger = jonas;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() + 1000000);
};
newPassport(jonas);
checkIn(flight, jonas)

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};
const upperFirstWord = function (str) {
  const [first, ...other] = str.split(' ');
  return [first.toUpperCase(), ...other].join(' ');
};
const transformer = function (str, fn) {
  console.log(`orignal string ${str}`);
  console.log(`transformed string ${fn(str)}`);
  console.log(`transformed by ${fn.name}`);
};
transformer('js is the beast', upperFirstWord);
transformer('js is the beast', oneWord);
const high5 = function () {
  console.log('👋');
};
document.body.addEventListener('click', high5);
['jonas', 'martha', 'adamr'].forEach(high5);
const greet = greeting => name => console.log(`${greeting} ${name}`);

const greeterHey = greet('hey');
greeterHey('Jonas');
greeterHey('Steven');
greet('hallo')('jonas');

const lufthansa = {
  airline: 'lufthansa',
  iateCode: 'LN',
  bookings: [],
  book(filghtNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iateCode}${filghtNum}`
    );
    this.bookings.push({ flight: `${this.iateCode}${filghtNum}`, name });
  },
};
lufthansa.book(243, 'jona');
lufthansa.book(323, 'john smith');
console.log(lufthansa);
const euroWings = {
  airline: 'euroWings',
  iateCode: 'EW',
  bookings: [],
};
const book = lufthansa.book;
// book(23, 'Sarah');

book.call(euroWings, 23, 'sarah willims');
console.log(euroWings);
book.call(lufthansa, 238, 'Marry Cooper');
console.log(lufthansa);
const swiss = {
  airline: 'Swiss Air Line',
  iateCode: 'LX',
  bookings: [],
};
book.call(swiss, 583, 'Marry Cooper');
console.log(swiss);
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
book.call(swiss, ...flightData);
const bookEW = book.bind(euroWings);
const bookLU = book.bind(lufthansa);
const bookLX = book.bind(swiss);
bookEW(23, 'Steven Williams');
const bookEW23 = book.bind(euroWings, 23);
bookEW23('adam');
bookEW23('martha copper');
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));
const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));
console.log(addVAT(23));
const addTax1 = function (rate, value) {
  return function () {
    console.log(value + value * rate);
  };
};

(function () {
  console.log('this will run once');
})();
(() => console.log('this will ALSO never run agian'))();
{
  var notPrivate = 23;
  const isPrivate = 23;
}

console.log(notPrivate);
console.log(isPrivate);

const SecureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passenger`);
  };
};
const booker = SecureBooking();
const booker1 = booker();
booker();
booker1();
*/
let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};
const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};
g();
f();
console.dir(f);
h();
f();
console.dir(f);
const boaedPassengers = function (n, wait) {
  const perGroup = n / 3;
  setTimeout(function () {
    console.log(` we are now boarding all ${n} passenger`);
    console.log(` there are 3 gropes with ${perGroup} passengers`);
  }, wait * 1000);
  console.log(`Will start bording in ${wait} SEC`);
};
const perGroup = 1000;
boaedPassengers(180, 3);
