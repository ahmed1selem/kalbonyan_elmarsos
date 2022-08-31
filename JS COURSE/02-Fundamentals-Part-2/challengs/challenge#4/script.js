"use strict";
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tip = [];
let total = [];
for (let i = 0; i < bills.length; i++) {
  if (50 <= bills[i] && bills[i] <= 200) {
    tip[i] = bills[i] * 0.15;
  } else {
    tip[i] = bills[i] * 0.2;
  }
  total.push(tip[i] + bills[i]);
}
function calcAvg(arr) {
  let avg = 0;
  for (let i = 0; i < arr.length; i++) {
    avg += arr[i];
  }
  return avg / arr.length;
}
console.log(total);
console.log(calcAvg(total));
