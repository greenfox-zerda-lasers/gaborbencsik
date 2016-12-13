'use strict'

// set up a setInterval loop with 1.5 second delays
// - log the mouse coordinates on each call

var setLoop = setInterval(logMouseMovement, 1500);
var pageCoordinates

document.onmousemove = function(coordinate) {
  pageCoordinates = coordinate.pageX + ", " + coordinate.pageY;
}

function logMouseMovement () {
    console.log(pageCoordinates);
}
