var ImageURL = document.querySelector('img');
var link = document.querySelector('a');
var buttonItems = document.querySelectorAll('button');

console.log(buttonItems);
console.log(ImageURL.getAttribute('src'));

ImageURL.setAttribute('src', 'https://s-media-cache-ak0.pinimg.com/originals/d5/52/57/d55257bb4542881c2c4aaddadfda23b9.png');

link.setAttribute('href', 'http://www.greenfoxacademy.com/');

buttonItems[1].setAttribute('disabled','');
buttonItems[1].textContent = "Don't click me!";
