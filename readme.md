# Instructions

## Once the repo is cloned, use `npm i` to install all dependencies.

Update the functions in `checkout.js` to match the requirements from the lecture slide.

Then use `npm test` to run jest, and see if the tests pass.

To run the function, use the following command:

`node checkout.js argument value`

| Argument | value   | description                                     |
| -------- | ------- | ----------------------------------------------- |
| scan     | barcode | returns product object, null if not found       |
| add      | barcode | adds item to basket array                       |
| sum      | null    | returns sum of items in basket                  |
| remove   | barcode | removes item from basket and returns new basket |

---

## for example:

`node checkout.js add 123`

Adds barcode item 123 to basket, and returns:

`Your basket is: apples, 3, bananas, 5` etc

---

**Use TDD to ensure all functions work as intended.**
