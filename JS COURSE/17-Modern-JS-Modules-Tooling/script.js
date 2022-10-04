//Importing module
// import { addToCart, totalPrince, tq } from './shoppingCart.js';
// addToCart(3, 'T-SHIRT');
// console.log(totalPrince, tq);

// import { cloneDeep, lowerCase } from 'lodash';
import shoppingCart from './shoppingCart.js';

console.log('imporing modual');
import * as shoppingCart from './shoppingCart.js';
shoppingCart.addToCart('bread', 5);
import add, { cart } from './shoppingCart.js';
add('pizza', 5);
add('bread', 5);
add('t-shirt', 5);
add('appels', 5);
console.log(cart);

// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// const getLastPost = async function () {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const data = await res.json();
//   console.log(data);
//   return { title: data.at(-1).title, text: data.at(-1).body };
// };
// const LastPost2 = await getLastPost();
// console.log(LastPost2);

const ShoppingCart2 = (function () {
  const cart = [];
  const shoppingCart = 10;
  const totalQuantity = 23;
  const totalPrice = 230;
  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(` ${quantity},${product}  is added `);
  };
  const orderStock = function (product, quantity) {
    console.log(` ${quantity},${product}  is added `);
  };
  return {
    addToCart,
    cart,
    totalQuantity,
    totalPrice,
  };
})();
shoppingCart.addToCart('apple', 4);
// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
import cloneDeep from 'lodash-es';
console.log('i am working');
const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};
const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);
state.user.loggedIn = false;
console.log(stateDeepClone);
if (module.hot) {
  module.hot.accept();
}

class person {
  greeting = 'hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.greeting} , ${this.name}`);
  }
}
const jonas = new person('Jonas');
console.log(cart.find(el => el.quantity >= 2));
import 'core-js/stable/array/find';
import 'regenerator-runtime/runtime';
