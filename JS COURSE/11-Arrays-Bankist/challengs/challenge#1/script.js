'use strict';
function checkDogs(dogsJulia, dogsKate) {
  // console.log(dogsJulia.slice(1, dogsJulia.size - 2));
  dogsJulia = dogsJulia.slice(1, dogsJulia.length - 2);
  console.log(dogsJulia);
  dogsJulia = dogsJulia.concat(dogsKate);
  dogsJulia.forEach((num, i) => {
    const type = num >= 3 ? 'adult' : 'puppy';
    console.log(`dog ${i + 1} is ${type} and ${num} years old `);
  });
}
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
