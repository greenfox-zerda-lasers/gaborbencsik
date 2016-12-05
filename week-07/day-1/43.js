'use strict';

var numbers = [3, 4, 5, 6, 7];
// write a function that filters the odd numbers
// from an array and returns a new array consisting
// only the evens

function filterOddNumbers(list) {
  var newList = [];
  for (var i = 0; i < list.length; i++) {
    if (list[i] % 2 === 0) {
      newList.push(list[i]);
    }
  }
  return newList;
}

console.log(filterOddNumbers(numbers));
