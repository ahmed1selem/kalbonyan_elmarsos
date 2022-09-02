// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/*
const xsa = '23';
const calcAGE = birthYear => 2037 - birthYear;
console.log();
console.log();
*/
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    value: Number(prompt('Degrees calsius')),
  };
  debugger;
  const kelvin = measurement.value + 273;
  return kelvin;
};
console.log(measureKelvin());
