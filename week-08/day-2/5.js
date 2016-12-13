'use strict';

// Add a click event listener to a <button> and console.log its innerHTML

var button = document.createElement('button');
document.body.appendChild(button);
button.innerHTML = "Button";

var logContent = function () {
  console.log(button.textContent);
}
button.addEventListener('click', logContent);
