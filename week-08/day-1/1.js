'use strict';

// Create a constructor for creating Animals.
// it should take one parameter: what the animal says
// Every animal should have a method called say() that prints what the animal says

function Animals (animalSaying) {
  this.animalSaying = animalSaying;
};

Animals.prototype.say = function () {
  console.log(this.animalSaying);
};

var cow = new Animals("muuu");
var sheep = new Animals("beee");

cow.say();
sheep.say();
