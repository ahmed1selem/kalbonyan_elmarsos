'use strict';

// Data needed for a later exercise
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// Data needed for first part of the section
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours,
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(`oreder received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to 
    ${address} at ${time} `);
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(`here is your delusce pasta ${ing1} ${ing2} and ${ing3}`);
  },
  orderPizza(mainIngreadient, ...otherIngreadients) {
    console.log(mainIngreadient);
    console.log(otherIngreadients);
  },
};
const getCode = str => str.slice(0, 3).toUpperCase();
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = ` ${type.startsWith('_Delayed') ? '🔴' : ''} ${type.replaceAll(
    '_',
    ''
  )} ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')}).`.padStart(36);
  console.log(output);
}
/*
console.log('a+very+nice'.split('+'));
console.log('ahmed selem'.split(' '));
const [firstName, lastName] = 'ahmed selem'.split(' ');
const newName = ['mester', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);
const captilizeName = function (name) {
  const names = name.split(' ');
  const newUpper = [];
  for (const n of names) {
    //newUpper.push(n[0].toUpperCase() + n.slice(1));
    newUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(newUpper.join(' '));
};
captilizeName('ahmed ashraf');
captilizeName('jonas schman');

const message = 'go to gate 23';
console.log(message.padStart(25, '+').padEnd(35, '+'));
const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};
console.log(maskCreditCard(4356344535234));
console.log(maskCreditCard('345342425242134345312343245'));
const message2 = 'bad weather...all Deapurturs Delayed...';
console.log(message2.repeat(3));
const planInLine = function (m) {
  console.log(`there are ${m} planes weating ${'✈'.repeat(m)} `);
};
planInLine(4);
planInLine(12);
planInLine(8);
/*
const airline = 'TAP Air Portugal';
console.log(airline.toUpperCase());
console.log(airline.toLowerCase());
const passenger = 'jOnas';
const passengerLower = passenger.toLocaleLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passenger.slice(1).toLocaleLowerCase();
console.log(passengerCorrect);
//comperinf email
const email = 'hello@jonas.io';
const loginEmail = 'HELLO@jonas.io\n';
//const lowerEmail = loginEmail.toLocaleLowerCase();
//const trimedEmail = lowerEmail.trim();
//console.log(trimedEmail);
const normlizedEmail = loginEmail.toLocaleLowerCase().trim();
console.log(normlizedEmail);
const priceGB = '200,97&';
const priceUS = priceGB.replace('&', '$').replace(',', '.');
console.log(priceUS);
const announsment = 'all passenger door AND door';
console.log(announsment.replace('door', 'gate'));
//console.log(announsment.replaceAll('door', 'gate'));
console.log(announsment.replace(/'door'/g, 'gate'));
const plane = 'Airbus A32@neo';
console.log(plane.includes('A32@'));
console.log(plane.includes('Boi'));
console.log(plane.includes('Air'));
if (plane.startsWith('Airbus' && plane.endsWith('neo')))
  console.log('part of the new Airbius family');
const checkBaggage = function (itmes) {
  const baggage = itmes.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('you are Not allowed to the plane');
  } else {
    console.log('Welcome aboaard');
  }
};
checkBaggage('I have a laptop some food and pocket knife');
checkBaggage('socks and cam');
checkBaggage('Isancks gun ');
/*
const airline = 'TAP Air Portugal';
const plane = 'A320';
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);
console.log(airline.length);
console.log('B737'.length);
console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));
console.log(airline.slice(4));
console.log(airline.slice(4, 7));
console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));
console.log(airline.slice(-2));
console.log(airline.slice(1, -1));
const checkMiddelSeat = function (seat) {
  const s = seat.slice(-1);
  if (s == 'B' || s == 'E') {
    console.log('you get the middel seat ');
  } else {
    console.log('you get lucky ');
  }
};
checkMiddelSeat('11B');
checkMiddelSeat('23C');
checkMiddelSeat('3E');
console.log(new String('johans'));
console.log(typeof new String('johans'));
console.log(typeof new String('johans').slice(1));
/*
const question = new Map([
  ['quation ', 'what is the best programming lang in the world'],
  [1, 'c'],
  [2, 'java'],
  [3, 'javaScript'],
  ['correct', 3],
  [true, 'correct🏆'],
  [false, 'Try again!'],
]);
console.log(question);
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);
for (const [key, value] of question) {
  if (typeof key == 'number') console.log(`Answer ${key}: ${value}`);
}
//const answer = Number(prompt('Your answer'));
//console.log(question.get(answer == question.get('correct')));
//concert map to array
console.log(...question);
console.log(question.entries());
console.log(question.values());
console.log(question.keys());
/*
const rest = new Map();
rest.set('name', 'classico italiano');
rest.set(1, 'Foronzz italy');
rest.set(2, 'pregato ');
rest
  .set('cetegories', ['italino', 'pizo'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'we are open')
  .set(false, 'we are closed');
console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));
const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
rest.delete(2);
console.log(rest.size);
const arr = [1, 2];
rest.set(arr, 'test');
rest.set(document.querySelector('h1'), 'heading');
console.log(rest);
console.log(rest.get(arr));
/*
const properties = Object.keys(openingHours);
console.log(properties);
console.log(`we are open on ${properties.length} days`);
for (const day of Object.keys(openingHours)) {
  console.log(day);
}
const values = Object.values(openingHours);
console.log(values);
const values1 = Object.entries(openingHours);
console.log(values1);
for (const [key, { open, close }] of values1) {
  console.log(`on ${key} we open at ${open} and close at ${close}`);
}
/*
//console.log(restaurant.hours.mon?.open);
const day = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const days of day) {
  const open = restaurant.openingHours[days]?.open ?? 'closed';
  console.log(`on ${days} we open at ${open}`);
}
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRissoto?.(0, 1) ?? 'Method does not exist');
const user = [{ name: 'johans' }];
console.log(user[0]?
  .name ?? 'User array empty');
/*
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const itme of menu) console.log(itme);
for (const [i, el] of menu.entries()) console.log(`${i + 1} ${el}`);

/*
const rest1 = {
  name: 'Caori',
  numGuests: 28,
};
const rest2 = {
  name: 'La pizza',
  owner: 'Giovanni Rossi',
};
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests ||= 10;
// rest1.numGuests ||= 10;
rest2.numGuests ??= 10;
rest1.numGuests ??= 10;
console.log(rest1);
console.log(rest2);
// rest2.owner = rest2.owner && 'ANNONYMOUS';
// rest1.owner = rest1.owner && 'ANNONYMOUS';
rest2 &&= 'ANNONYMOUS';
rest1 &&= 'ANNONYMOUS';
/*
restaurant.numGuest = 0;
const guests1 = restaurant.numGuest || 10;
console.log(guests1);
const guestsCorrect = restaurant.numGuest ?? 10;
console.log(guestsCorrect);

/*
console.log('------ OR -------');

console.log('' || 'a');
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || '' || 'hello' || 23 || null);
const guests1 = restaurant.numGuest ? restaurant.numGuest : 10;
console.log(guests1);
const guests2 = restaurant.numGuest || 10;
console.log(guests2);
console.log('------ AND -------');
console.log(0 && 'jonas');
console.log(9 && 23 && null);
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushr');
}
restaurant.orderPasta && restaurant.orderPizza('mushrooms', 'spinach');

/*
const arr = [1, 2, ...[3, 4]];
//rest cuz on left of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, Risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, Risotto, otherFood);
//objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);
//function
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(2, 3, 4, 5);
add(2, 3, 5, 4);
const x = [23, 5, 7];
add(...x);
restaurant.orderPizza('mushroom', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushroom');
/*
const arr = [7, 8, 9];
const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr);
//... is the same as manulay writing values
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);
//copy array
const mainMenuCopy = [...restaurant.mainMenu];
const Menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(Menu);
const str = 'jonas';
const letters = [...str, ' ', 's.'];
console.log(letters);
console.log(...str);
// const ingreadients = [
//   prompt("let's make pasta! ingreadient 1"),
//   prompt("let's make pasta! ingreadient 2"),
//   prompt("let's make pasta! ingreadient 3"),
// ];
// console.log(ingreadients);
// restaurant.orderPasta(...ingreadients);
//object
const newResturant = { ...restaurant, founder: 'Gussibe', foundedIN: 1991 };
console.log(newResturant);
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurant.name);
console.log(restaurantCopy.name);
/*
restaurant.orderDelivery({
  time: '22:30',
  address: 'via del sole 21',
  mainIndex: 2,
  starterIndex: 2,
});
restaurant.orderDelivery({
  address: 'via del sole 21',
  starterIndex: 1,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);
const { menu = [], starterMenu: starter = [] } = restaurant;
console.log(menu, starter);
//mutating var
let a = 101;
let b = 111;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

/*
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
const [x, , y, z] = arr;
console.log(x, y, z);
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log();
[main, secondary] = [secondary, main];
console.log(main, secondary);
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);
const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested;
console.log(i, j, k);
//defualt values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/
