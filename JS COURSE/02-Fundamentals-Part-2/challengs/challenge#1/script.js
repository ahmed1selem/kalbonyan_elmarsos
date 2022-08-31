"use strict";
const calcAverge = (num1, num2, num3) => (num1 + num2 + num3) / 3;
function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins * 2 <= avgKoalas) {
    console.log(`koalas win ${avgKoalas} VS ${avgDolphins}`);
  } else if (avgKoalas * 2 <= avgDolphins) {
    console.log(`koalas win ${avgKoalas} VS ${avgDolphins}`);
  }
}
const avgDolphins = calcAverge(44, 23, 71);
const avgKoalas = calcAverge(65, 54, 41);
checkWinner(avgDolphins, avgKoalas);
