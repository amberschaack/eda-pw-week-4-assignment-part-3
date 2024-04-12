console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];
const maxItems = 5;
console.log('current basket:', basket);

function addItem(item) {
  basket.push(item);
  if (basket.length > 0 && isFull() === false) {
    return true;
  } else {
    basket.pop(item); // will remove any item after the max amount
    return false;
  }
}
console.log('in addItem function:');
console.log(`Basket contains: ${basket}`);
console.log('Adding chicken to basket', addItem('chicken'));
console.log('Adding bread to basket', addItem('bread'));
console.log('Adding carrots to basket', addItem('carrots'));
console.log('Adding cheese to basket', addItem('cheese'));
console.log('Adding cheese to basket', addItem('milk'));
console.log('Adding cheese to basket', addItem('candy'));
console.log(`Basket now contains: ${basket}`);

function listItems(array) {
  for (i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}
console.log('in listItems function:');
listItems(basket);

function empty(array) {
  while (array.length > 0) {
    array.pop();
  }
}
console.log('in empty function:');
empty(basket);
console.log('Basket now contains:', basket);

// end required features

// begin stretch goals

function isFull() {
  if (basket.length < maxItems) {
    return false;
  } else {
    return true;
  }
}
console.log('in isFull function:');
console.log(isFull());

/*
function removeItem(item) {
  for (i = 0; i < basket.length; i++) {
    if (basket.indexOf(i) === item) {
      console.log(index);
    } else {
      console.log('null');
    }
  }
}
console.log('in removeItem function:');
removeItem('chicken');
*/

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
