//Exporting modual
// console.log('export');
// console.log('start fetch');
// await fetch('https://jsonplaceholder.typicode.com/posts');
// console.log('finshed fetch');

export const cart = [];
export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(` ${quantity},${product}  is added `);
};
const totalPrince = 237;
const totalQuantity = 10;
export { totalQuantity as tq, totalPrince };
export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(` ${quantity},${product}  is added `);
}
