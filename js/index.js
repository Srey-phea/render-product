import { CardComponent } from "../components/CardComponent.js";
import { products } from "../data/products.js";
let renderArea = document.querySelector("#renderArea");

// RENDER PRODUCT
products
  .slice(0, 10)
  .map((product) => (renderArea.innerHTML += CardComponent(product)));

 // វិធីទី​ 1
// products
// .slice(0,6)  // it mean we have 6 card , and 0 is a index of array and 6 is lenght
// .map((product) => (renderArea.innerHTML += CardComponent(product)));

// វិធីទី​ 2
// const num = [ 1, 2, 3, 4, 5, 6]
// console.log(num(num.length))

// get product

// products.map((product) => (renderArea.innerHTML = CardComponent(product)))
// const product = {
//   id: 1,
//   title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//   price: 109.95,
//   description:
//     "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//   category: "men's clothing",
//   rating: {
//     rate: 3.9,
//     count: 120
//   }
// };

// const {
//   id,
//   title: name,
//   price,
//   rating: { rate, count }
// } = product;
// console.log(id, name, price, rate, count);
