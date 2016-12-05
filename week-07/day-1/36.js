'use strict';

var ah = [3, 4, 5, 6, 7];
// print the sum of all numbers in ah

/* * /
var x = 0;
var summa = 0

while (ah.length > x) {
  summa += ah[x];
  x++;
}

console.log(summa)
/* */

var summa = 0;
for (var i = 0; i < ah.length; i++) {
  summa += ah[i];
}

console.log(summa);
