const catalogue = require("./catalogue.json");

const checkout = require("./index");
const basket = [];
const item = checkout.scanProduct(catalogue, process.argv[2]);
if (item) checkout.addProduct(basket, item);
console.log("Your basket is", basket);
