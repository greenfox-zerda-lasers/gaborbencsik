'use strict';

var names = ['Zakarias', 'Hans', 'Otto', 'Ole'];
// create a function that returns the shortest string
// from an array

function getShortestName(list) {
  var shortestName = list[0];
  for (var i = 0; i < list.length; i++) {
    if (list[i].length < shortestName.length) {
      shortestName = list[i];
    }
  }
  return shortestName;
}

console.log(getShortestName(names));
