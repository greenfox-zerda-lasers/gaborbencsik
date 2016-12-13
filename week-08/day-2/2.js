'use strict'

// create a function that starts a setTimeout with a 3 second delay.
// - create a button with an event listener that can cancel the setTimeout

function logSomething () {
  console.log("Timer setted to 3 second delay");
}

var setTimer = setTimeout(logSomething, 3000);

var button = document.createElement('button');
document.body.appendChild(button);
button.innerHTML = "Button";

var stopTimer = function (){
  clearTimeout(setTimer);
  alert('Timer stopped');
}

button.addEventListener('click', stopTimer);
