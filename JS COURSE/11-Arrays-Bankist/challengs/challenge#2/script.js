const calcAverageHumanAge = function (ages) {
  const dogHage = ages.map(ages => (ages <= 2 ? ages * 2 : 16 + ages * 4));
  console.log(dogHage);
  const dogHageAdult = dogHage.filter(ages => ages >= 18);
  console.log(dogHageAdult);
  const dogHageavg =
    // dogHageAdult.reduce((acc, cur, i) => acc + cur) / dogHageAdult.length;
    dogHageAdult.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);
  return dogHageavg;
};
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));
