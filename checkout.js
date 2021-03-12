const fs = require("fs");
const path = require("path");
const basket = require("./basket.json");
const catalogue = require("./catalogue.json");

const checkout = require("./index");

const input = process.argv[2];

switch (input) {
  case "scan": {
    const barcode = process.argv[3];

    const result = checkout.scanProduct(catalogue, barcode);

    console.log(result);
    break;
  }
  case "add": {
    const barcode = process.argv[3];

    const item = checkout.scanProduct(catalogue, barcode);

    if (item) {
      checkout.addProduct(basket, item);
    }

    fs.writeFileSync(
      path.join(__dirname, "basket.json"),
      JSON.stringify(basket)
    );

    console.log("Item added");
    break;
  }
  case "total": {
    const total = checkout.total(basket);

    console.log("Your total is", total);
    break;
  }

  case "remove": {
    const barcode = process.argv[3];
    const removed = checkout.remove(basket, barcode);
    fs.writeFileSync(
      path.join(__dirname, "basket.json"),
      JSON.stringify(basket)
    );
    console.log(removed);
    break;
  }

  default: {
    console.log("Command not found");
    break;
  }
}

// const item = checkout.scanProduct(catalogue, process.argv[2]);
// if (item) checkout.addProduct(basket, item);
// console.log("Scanned item is:", basket);
