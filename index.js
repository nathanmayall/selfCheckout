const scanProduct = (catalogue, barcode) => {
  return catalogue.find((fruit) => fruit.barcode === barcode) || null;
};

const addProduct = (basket, item) => {
  basket.push(item);
};

const total = (basket) => {
  if (basket.length === 1) {
    return basket[0].price;
  }
  if (basket.length !== 0) {
    const totalPrice = basket.reduce((a, b) => {
      return a.price + b.price;
    });
    return totalPrice;
  }
  return 0;
};

const remove = (basket, item) => {
  for (let i = 0; i < basket.length; i++) {
    if (basket[i].barcode === item) {
      basket.splice(i, 1);
      return basket;
    }
  }
  return "Item not in basket";
};

module.exports = { scanProduct, addProduct, total, remove };
