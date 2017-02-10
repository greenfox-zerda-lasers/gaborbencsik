'use strict';

const square = document.getElementById('1');
const runningObject = document.getElementById('2');
const button = document.querySelector('.button');
const runButton = document.querySelector('.run');
let x = (square.offsetLeft-(window.innerWidth-square.clientWidth)/2);
let y = (square.offsetTop-(window.innerHeight-square.clientHeight)/2);

const run = () => {
  window.scroll({top: 0, left: 0});
}

const scrollToSquare = () => {
  window.scroll({top: y, left: x, behavior: 'smooth'});
}

button.addEventListener('click', scrollToSquare);
runButton.addEventListener('click', run);

window.addEventListener("scroll", function() {
  console.log(window.scrollX);
  console.log(window.scrollY);
});
