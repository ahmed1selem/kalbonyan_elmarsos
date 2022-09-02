'use strict';
let arr1 = [12, 5, -5, 0, 4];
const printForcast = function (arr) {
  let conString = ``;
  for (let i = 0; i < arr.length; i++) {
    conString = conString + `...${arr[i]}C in ${i + 1} days `;
  }
  console.log(conString);
};
printForcast(arr1);
