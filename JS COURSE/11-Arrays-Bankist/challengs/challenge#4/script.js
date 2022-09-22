'use strict';
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];
dogs.forEach(name => (name.foodPortion = name.weight ** 0.75 * 28));
const findObj = function (name) {
  const temp = dogs.find(val => val.owners.includes(name));
  return foodStats(temp);
};
const foodStats = function (name) {
  return name.foodPortion === name.curFood
    ? 'same'
    : name.foodPortion < name.curFood;
};
console.log(findObj(`Sarah`));
console.log(
  `${
    findObj(`Sarah`)
      ? 'your dog is eating too mush'
      : 'your dog is eating too little'
  }`
);
console.log(dogs);
const ownersEatTooMuch = dogs
  .filter(name => foodStats(name))
  .flatMap(name => name.owners);
const ownersEatTooLittel = dogs
  .filter(name => !foodStats(name))
  .flatMap(name => name.owners);
console.log(
  `${ownersEatTooMuch.join(
    ' and '
  )} eats too mush and ${ownersEatTooLittel.join(' and ')}eats too little`
);
const okayAmount = function (name) {
  return (
    name.foodPortion * 0.9 <= name.curFood &&
    name.foodPortion * 1.1 >= name.curFood
  );
};
console.log(dogs.filter(name => foodStats(name) === 'same') != '');
console.log(dogs.some(name => okayAmount(name)));
const okayAmountArr = dogs.filter(name => okayAmount(name));
console.log(okayAmountArr);

console.log(dogs.sort((a, b) => a.foodPortion - b.foodPortion));
