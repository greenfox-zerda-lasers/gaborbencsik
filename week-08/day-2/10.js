'use strict';

// Create a circle with 100px diameter (use border radius)
//  - Make it move from left to right edge
//  - use requestAnimationFrame

var currentPosition = 0;

var drawCircle = function(size) {
  var circle = document.createElement('div');
  document.body.appendChild(circle);
  circle.style.backgroundColor = "blue";
  circle.style.borderRadius = "50%";
  circle.style.width = size + "px";
  circle.style.height = size + "px";
  circle.style.position = "absolute";
  return circle;
}
var circle = drawCircle(100);

function moveElement () {
  currentPosition += 5;
  if (currentPosition >= window.innerWidth){
    currentPosition = -100;
  }
  circle.style.left = currentPosition + "px";

  window.requestAnimationFrame(moveElement);
}
moveElement();
