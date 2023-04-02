// Importing Module
// import {
//   addToCart,
//   totalPrice as price,
//   totalQuantity as tq,
// } from './shoppingCart.js';

console.log('Importing Module');
// addToCart('bread', 5);
// console.log(price, tq);

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 67);
// console.log(ShoppingCart.totalPrice);

import add from './shoppingCart.js';
add('pizza', 2);

// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost2 = await getLastPost();
console.log(lastPost2);
