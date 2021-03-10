const scanProduct = (catalogue, barcode) => {
  return catalogue.find((fruit) => fruit.barcode === barcode) || null;
};

const addProduct = (basket, item) => {
  basket.push(item);
};

module.exports = { scanProduct, addProduct };
