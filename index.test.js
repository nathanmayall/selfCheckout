const checkout = require("./index");

const orange = {
  barcode: "123",
  price: 7,
};

const apple = {
  barcode: "789",
  price: 5,
};

const kiwi = {
  barcode: "765",
  price: 25,
};

const banana = {
  barcode: "456",
  price: 6,
};

const catalogue = [orange, apple, kiwi, banana];

describe("scanProduct", () => {
  it("returns a product from a catalogue by barcode", () => {
    // setup
    // exercise
    const result = checkout.scanProduct(catalogue, "765");
    // verify
    const expected = kiwi;
    expect(result).toBe(expected);
    // teardown
  });
  it("returns null when not found", () => {
    // setup
    // exercise
    const result = checkout.scanProduct(catalogue, "768");
    // verify
    const expected = null;
    expect(result).toBe(expected);
    // teardown
  });
});

describe("addProduct", () => {
  it("adds item to a basket", () => {
    const basket = [];
    checkout.addProduct(basket, banana);
    expect(basket).toEqual([banana]);
  });
});
