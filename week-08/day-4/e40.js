'use strict'

var aj = 'kuty'
// write a function that gets a string as an input
// and appends an 'a' character to its end and returns a new string

function appendA(input) {
  return input + 'a';
}

console.log(appendA(aj));
console.log(appendA('macsk'));

module.exports = appendA;
