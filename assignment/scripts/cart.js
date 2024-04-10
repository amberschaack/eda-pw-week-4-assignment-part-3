console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
console.log('current basket:', basket);

function addItem(item) {
    basket.push(item);
    if (basket.length > 0) {
        return true;
    }
}
console.log('in addItem function:');
console.log(`Basket contains: ${basket}`);
console.log('Adding chicken to basket', addItem('chicken'));
console.log('Adding bread to basket', addItem('bread'));
console.log('Adding carrots to basket', addItem('carrots'));
console.log('Adding cheese to basket', addItem('cheese'));
console.log(`Basket now contains: ${basket}`);

function listItems(array) {}
console.log('in listItems function:');

function empty() {}
console.log('in empty function:');

// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    basket: typeof basket !== 'undefined' ? basket : undefined,
    addItem: typeof addItem !== 'undefined' ? addItem : undefined,
    listItems: typeof listItems !== 'undefined' ? listItems : undefined,
    maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
    empty: typeof empty !== 'undefined' ? empty : undefined,
    isFull: typeof isFull !== 'undefined' ? isFull : undefined,
    removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
  };
} catch (e) {
  // Do nothing
}
