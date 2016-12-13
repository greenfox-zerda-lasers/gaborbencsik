'use strict';

// imitate the setInterval functionality with setTimeouts (recreate the previous excersize)

var setLoop = function() {
  setTimeout(setLoop, 1500);
  console.log(pageCoordinates);
};

var pageCoordinates;

document.onmousemove = function(coordinate) {
  pageCoordinates = coordinate.pageX + ", " + coordinate.pageY;
};

setLoop();
