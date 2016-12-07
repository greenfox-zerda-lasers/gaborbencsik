'use strict';

// create a function that takes a string and counts its letters
// it should return an object thats keys are the letters and the values are
// the counts.
// example: "apple" -> {a: 1, p: 2, l: 1, e: 1}

function countLetters (stringInput) {
  
  return stringInput.split('').reduce(function(allCharacter, character) {
    if (character in allCharacter) {
      allCharacter[character]++;
    } else {
      allCharacter[character] = 1;
    }
    return allCharacter;
  }, {});
}

console.log(countLetters("alma"))
