'use strict';

// Create a `Stack` constructor that stores elements
// It should have a `size` method that returns number of elements it has
// It should have a `push` method that adds an element to the stack
// It should have a `pop` method that returns the last element form the stack and also deletes it from it

// please don`t use the built in methods

function Stack () {
  this.index = 0;
  this.elements = [];
  this.size = function() {
    return this.elements.length;
  };
  this.push = function(item) {
    this.elements[this.index] = item;
    this.index++;
  };
  this.pop = function() {
    var lastElement = this.elements[this.size()-1];
    this.elements.length -= 1;
    return lastElement;
  }
}

var stack1 = new Stack();

console.log(stack1.size());
stack1.push('valami');
console.log(stack1.size());
console.log(stack1.pop());
console.log(stack1.size());
console.log(stack1.elements);
