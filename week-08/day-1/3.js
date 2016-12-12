'use strict';

// Create a constructor for creating Rockets.
// it should take one parameter: the consumption of the rocket
// (amount of fuel needed for launch)
// Every rocket should have a method called fill(amount) that fills the tank of
// the rocket with the amount of fuel given as a parameter
// Every rocket should have a method called launch() that launches the rocket
// if it has enough fuel (more than its consumption)

function Rockets (consumption) {
  this.consumption = consumption;
  this.inTank = 0;
  this.launches = 0;
}

Rockets.prototype.fill = function (amount) {
  this.inTank += amount;

  console.log(this.inTank + " fuel in tank");
};

Rockets.prototype.launch = function () {
  if (this.inTank >= this.consumption) {
    this.inTank -= this.consumption;
    this.launches++;

    console.log(this.inTank + " fuel left.");
    console.log("The Rocket has launched " + this.launches + "time(s)");
  }
};

var rocket1 = new Rockets(3);
var rocket2 = new Rockets(10);

console.log(rocket1.consumption);
console.log(rocket1.inTank);
console.log(rocket1.launches);
console.log(rocket2.consumption);
console.log(rocket2.inTank);
console.log(rocket2.launches);

rocket1.fill(4);
rocket2.fill(12);
rocket1.launch();
rocket2.launch();
