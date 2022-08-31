"use strict";
/*
let hasDriverL = false;
function logger() {
  console.log("My name is Jonas");
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number("23");

function calAge1(birthyear) {
  return 2037 - birthyear;
}
const calcAge2 = function (birthyear) {
  return 2037 - birthyear;
};

const calcAge2 = function (birthyear) {
  return 2037 - birthyear;
};
console.log(calcAge2(1991));
const calcAge3 = (birthyear) => 2037 - birthyear;
console.log(calcAge3(1991));

const friends = ["michle", "cd"];
const friends1 = new Array("michle", "cd");
//const friends = ["e32", "f4"];
console.log(friends.length);
console.log(frinds[friends.length - 1]);
const Jonhas = ["johans", 10];

const jonas = {
  firstName: "ahmed",
  birthyear: 1991,
  frinds: ["micle", "john", "idk"],
  hasDriversLincess: true,
  calcAge: function (birthyear) {
    this.age = 2027 - this.birthyear;
    return this.age;
  },

  getSammury: function () {
    return `${this.firstName} is a ${this.age} old teasher
and he has  ${this.hasDriversLincess ? "a" : "no"}  driver lincess `;
  },
};
console.log(jonas.firstName);
console.log(`${jonas.firstName} has ${jonas.frinds.length} frinds ,and his
best frind is called ${jonas.frinds[0]}`);
jonas.calcAge();
console.log(jonas.age);
console.log(jonas.getSammury());
X
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`lifting weight rep ${rep}`);
// }
const types = [];
const john = ["ahmed", "asldk", 2334, ["micle", "peter", "steaven"]];
for (let i = 0; i < john.length; i++) {
  console.log(john[i]);
  types.push(typeof john[i]);
}
console.log(types);
const year = [1991, 2000, 2001];
const ages = [];
for (let i = 0; i < yaer.length; i++) {
  ages.push(2037 - year[i]);
}
// continue and break
for (let i = 0; i < john.length; i++) {
  if (typeof john[i] != "string") continue;
  console.log(john[i]);
}

const john = ["ahmed", "asldk", 2334, ["micle", "peter", "steaven"]];

for (let i = john.length - 1; i >= 0; i--) {
  console.log(john[i]);
}
for (let execs = 1; execs < 4; execs++) {
  console.log(`-----string ecxes ${execs}`);
  for (let rep = 1; rep < 6; rep++) console.log(` lifting reps ${rep}`);
}
*/
let dice = Math.trunc(Math.random() * 6 + 1);
while (dice !== 6) {
  console.log(`you rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6 + 1);
  if (dice === 6) console.log("loop is about to end......");
}
