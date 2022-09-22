const calcAverageHumanAge = ages =>
  ages
    .map(ages => (ages <= 2 ? ages * 2 : 16 + ages * 4))
    .filter(ages => ages >= 18)
    .reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));
console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
