"use strict";
let total = [];
function tips(bill) {
  let tip = bill;
  if (50 <= bill && bill <= 200) {
    bill = bill * 0.15;
    console.log(bill);
  } else {
    bill = bill * 0.2;
  }
  total.push(tip + bill);
  return total;
}
let tip = [125, 555, 44];
console.log(tips(tip[0]));
console.log(tips(tip[1]));
console.log(tips(tip[2]));
