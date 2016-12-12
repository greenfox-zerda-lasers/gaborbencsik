'use strict';

// Create a constructor for creating Rectangles.
// it should take two parameters: the sides of the rectangle
// Every rectangle should have a method called getArea() that returns its area
// Every rectangle should have a method called getCircumference() that returns its circumference


function Rectangles (x,y) {
  this.x = x;
  this.y = y;
}

Rectangles.prototype.getArea = function () {
  return 2*this.x + 2*this.y;
};

Rectangles.prototype.getCircumference = function () {
  return this.x*this.y;
};

var smallRect = new Rectangles (4, 5);
var bigRect = new Rectangles (10, 11);

console.log(smallRect.getArea());
console.log(smallRect.getCircumference());

console.log(bigRect.getArea());
console.log(bigRect.getCircumference());
