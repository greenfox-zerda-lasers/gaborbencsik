// 1
var king = document.getElementById('b325');
console.log(king.value);

// 2
var conceited = document.getElementsByClassName('b326');
alert(conceited);

// 3
var businessLamp = document.getElementsByClassName('big');
console.log(businessLamp);

// 4
var conceitedKing = document.querySelectorAll(".container .asteroid");
for (var i=0; i < conceitedKing.length; i++){
  alert(conceitedKing[i]);
}
console.group("4-es feladat");
console.log(conceitedKing);
console.groupEnd();

// 5

var noBusiness = document.querySelectorAll("div.asteroid");
console.log(noBusiness);

// 6. store 'The Businessman' in the 'allBizniss' variable.
// show the result in an 'alert' window.

var allBizniss = document.querySelectorAll("p.asteroid");
alert(allBizniss);
