'use strict';

// create a function that returns it's input factorial

function factorial(number) {
  var fact = 1
  for (var i = 0; i < number; number--) {
    if (number === 0 || number === 1) {
      fact *= 1;
    } else if (number > 1) {
      fact *= number;
    }
  }
  return fact;
}

console.log(factorial(5));

module.exports = factorial;
