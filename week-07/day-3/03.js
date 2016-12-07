'use strict';

// write a function called each that takes an array and a function as a paramter
// and calls the function with each element of the array as parameter
// so it should call the array 3 times if the array has 3 elements

function each (arr, func) {
  for (var i = 0; i < arr.length; i++) {
    func(arr[i]);
  }
}

each([1,2,3], console.log);
