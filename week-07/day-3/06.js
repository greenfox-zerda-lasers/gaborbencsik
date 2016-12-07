'use strict';


// create a function that takes a string and a letter and returns a boolean
// it should return true if the string consits the given letter, false otherwise

function listConsistLetter (string, letter) {
  return string.split('').some(function(character) {
    return letter === character;
  });

}

console.log(listConsistLetter("alma","a"));
