'strict mode';

// const { reduce } = require('lodash-es');

const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);

const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});

const getLimit = (limits, user) => limits?.[user] ?? 0;

const addExpense = function (state, limit, value, description, user = 'jonas') {
  const cleanUser = user.toLowerCase();

  // const limit = spendingLimits[user] ? spendingLimits[user] : 0;

  return value <= getLimit(spendingLimits, cleanUser)
    ? [...state, { value: -value, description, user: cleanUser }]
    : state;
  // budget.push({ value: -value, description, user:cleanUser });
};
const newBudget1 = addExpense(budget, spendingLimits, 10, 'Pizza 🍕');
const newBudget2 = addExpense(
  newBudget1,
  spendingLimits,
  90,
  'Going to movies 🍿',
  'Matilda'
);

const newBudget3 = addExpense(newBudget2, spendingLimits, 200, 'Stuff', 'Jay');
console.log(newBudget3);
// const checkExpenses2 = function (state, limits) {
//   return state.map(entery => {
//     return entery.value < -getLimit(limits, entery.user)
//       ? { ...entery, flag: 'limit' }
//       : entery;
//   });
// for (const entery of newBudget3)
//   if (entery.value < -getLimit(spendingLimits, entery.user))
//     entery.flag = 'limit';
// };
const checkExpenses = (state, limits) =>
  state.map(entery => {
    return entery.value < -getLimit(limits, entery.user)
      ? { ...entery, flag: 'limit' }
      : entery;
  });

const finalbudget = checkExpenses(newBudget3, spendingLimits);
console.log(finalbudget);
const logbigExpenses = function (state, bigLimt) {
  const bigExpenses = state
    .filter(entery => entery.value <= -bigLimt)
    .reduce((str, cur) => `${str} /${cur.description.slice(-2)}`, '');
  console.log(bigExpenses);
  // .map(entery => entery.description.slice(-2))
  // .join(' / ');

  // let output = '';
  // for (const entery of budget)
  //   output +=
  //     entery.value <= -bigLimt ? ` ${entery.description.slice(-2)}  / ` : '';

  // output = output.slice(0, -2); // Remove last '/ '
  // console.log(output);
};
console.log(budget);
logbigExpenses(finalbudget, 100);
