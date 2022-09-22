'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deopsits = movements.filter(function (mov) {
  return mov > 0;
});
const withdrawals = movements.filter(function (mov) {
  return mov < 0;
});
const displayMovments = function (movement, sort = false) {
  const mov = sort ? movement.slice().sort((a, b) => a - b) : movements;
  containerMovements.innerHTML = ' ';
  mov.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = ` 
  <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__value">${mov}</div>
        </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
const eurToUsd = 1.1;
// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUsd;
// });
const movementsUSD = movements.map(mov => mov * eurToUsd);

const movementsDecriptions = movements.map(
  (mov, i) =>
    `Movment ${i + 1}: You  ${mov > 0 ? 'deopsited' : 'withdrew'} ${Math.abs(
      mov
    )} €`
);
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);

  labelBalance.textContent = `${acc.balance} €`;
};
const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov);
  labelSumIn.textContent = `${incomes}€`;
  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov);
  labelSumOut.textContent = `${Math.abs(out)}€`;
  const interst = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter(interest => interest >= 1)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumInterest.textContent = `${interst}€`;
};

const creatUserName = function (user) {
  user.forEach(name => {
    name.name = name.owner
      .toLowerCase()
      .split(' ')
      .map(word => word[0])
      .join('');
  });
};
creatUserName(accounts);
const updateUI = function (acc) {
  displayMovments(acc.movements);
  calcDisplayBalance(acc);
  calcDisplaySummary(acc);
};
console.log(accounts);
//eve handler
let currentAccount;
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAccount = accounts.find(acc => acc.name === inputLoginUsername.value);
  console.log(currentAccount);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    console.log(`login`);
    //display UI and message
    labelWelcome.textContent = `welcom back ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
    //clear input
    inputLoginUsername.value = inputLoginPin.value = '';

    //movm
    updateUI(currentAccount);
  }
});
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(acc => acc.name === inputTransferTo.value);
  inputTransferAmount.value = inputTransferTo.value = '';
  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.name != currentAccount.name
  ) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    updateUI(currentAccount);
  }
});
btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.name &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(acc => acc.name === currentAccount.name);
    accounts.splice(index, 1);
    console.log(accounts);
    containerApp.style.opacity = 0;
  }
  inputClosePin.value = inputCloseUsername.value = ' ';
});
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovments(currentAccount.movements, !sorted);
  sorted = !sorted;
});
/*
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
/////////////////////////////////////////////////
let arr = ['a', 'b', 'c', 'e', 'd'];
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -1));
console.log(...arr);
//splice is like slice but it change the array
// console.log(arr.splice(2));
// arr.splice(-1);
arr.splice(1, 2);
console.log(arr);
//reverse
const arr2 = ['j', 'i', 'h', 'g', 'j'];
arr2.reverse();
console.log(arr2);
//concat
const letters = arr.concat(arr2);
console.log(letters);
//join
console.log(letters.join('-'));
const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));
console.log('asdasd'.at(-2));

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`mov ${i + 1} You debosited ${movement}`);
  } else {
    console.log(`mov ${i + 1} you pulled ${Math.abs(movement)} `);
  }
}
console.log('------------------------------------');
movements.forEach(function (movement, i) {
  if (movement > 0) {
    console.log(`You debosited ${movement} mov ${i + 1} `);
  } else {
    console.log(`you pulled ${Math.abs(movement)} mov ${i + 1} `);
  }
});
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);
currencies.forEach(function (value, key, map) {
  console.log(`${key} ${value}`);
});
//set
const currenciesUNIQ = new Set(['GBP', 'EUR', 'USD', 'EUR']);

currenciesUNIQ.forEach(function (value) {
  console.log(`${value} : ${value} `);
});

console.log(movements);
const balance = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance);
//max val of mov arr
const maxval = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(maxval);
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map((mov, i, arr) => {
    console.log(arr);
    return mov * eurToUsd;
  })
  .reduce((acc, cur) => acc + cur);
console.log(totalDepositsUSD);
const firstWithdrew = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrew);
const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);
console.log(movements.some(mov => mov > 0));
console.log(movements.some(mov => mov == -130));
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

const deposit = mov => mov > 0;
console.log(movements.every(deposit));
console.log(movements.filter(deposit));
console.log(movements.some(deposit));
const arr = [[1, 3, 4], [4, 5, 6], 7, 5];
console.log(arr.flat());
const arrDeep = [[1, [1, 3, 4]], [4, 5, 6], 7, 5];
console.log(arrDeep.flat(2));
// const accMovments = accounts.map(acc => acc.movements);
// console.log(accMovments);
// const allMov = accMovments.flat();
// console.log(allMov);
// const overAllBalance = allMov.reduce((acc, mov) => acc + mov, 0);
// console.log(overAllBalance);
const overAllBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overAllBalance);
const overAllBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overAllBalance2);
// const owners = ['jonas', 'adam', 'guy'];
// console.log(owners.sort());

// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
//   //return a - b;
// });
// console.log(movements);

// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (a < b) return 1;
//   //return b - a;
// });
// console.log(movements);
// movements.sort((a, b) => b - a);
// console.log(movements);
// movements.sort((a, b) => a - b);
// console.log(movements);
const arr = [1, 2, 3, 4, 5];
const x = new Array(7);
x.fill(9, 3, 5);
console.log(x);
const y = Array.from({ length: 7 }, () => 1);
console.log(y);
const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);
const random = Array.from({ length: 100 }, (_, i) =>
  String(Math.random() * 100).slice(0, 2)
);
console.log(random);
labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll(`.movements__value`),
    el => el.textContent.replace('0', ' ')
  );

  console.log(movementsUI);
  const movementsUI2 = [...document.querySelectorAll(`.movements__value`)];
});
const bankDepositeSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((sum, cur) => sum + cur, 0);
console.log(bankDepositeSum);
const numDeposite1000 = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);
console.log(numDeposite1000);
const { deopsits1, withdrawals1 } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      sums[cur > 0 ? 'deopsits1' : 'withdrawals1'] += cur;
      return sums;
    },
    { deopsits1: 0, withdrawals1: 0 }
  );
console.log(deopsits1, withdrawals1);
const converTitelCase = function (title) {
  const capitlize = str => str[0].toUpperCase() + str.slice(1);
  const exceptions = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with', 'and'];
  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitlize(word)))
    .join(' ');
  return capitlize(titleCase);
};
console.log(converTitelCase('this is a nice title'));
console.log(converTitelCase('and this is a nice title'));
*/
const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);
