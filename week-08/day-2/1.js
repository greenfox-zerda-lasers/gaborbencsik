'use strict'

// create a function that when called alerts "I'm delayed" after 1 second

function showAlert () {
  alert("I'm delayed");
}

setTimeout(showAlert, 1000);
