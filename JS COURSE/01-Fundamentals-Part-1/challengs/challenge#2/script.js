let markHight = 1.69;
let markWeight = 78;
let johnHight = 1.95;
let johnWeight = 92;
let MarkBMI = markWeight / markHight ** 2;
let johnBMI = johnWeight / johnHight ** 2;
console.log((markHigherBMI = MarkBMI > johnBMI));
if (MarkBMI > johnBMI) {
  console.log(
    `mark's BMI ${round(MarkBMI)} is higher than jone's BMI ${round(johnBMI)} `
  );
} else {
  console.log(`mark's BMI ${MarkBMI} is less than jone's BMI ${johnBMI} `);
}

markHight = 1.88;
markWeight = 95;
johnHight = 1.76;
johnWeight = 85;
MarkBMI = markWeight / markHight ** 2;
johnBMI = johnWeight / johnHight ** 2;
if (MarkBMI > johnBMI) {
  console.log(`mark's BMI ${MarkBMI} is higher than jone's BMI ${johnBMI} `);
} else {
  console.log(`mark's BMI ${MarkBMI} is less than jone's BMI ${johnBMI} `);
}
