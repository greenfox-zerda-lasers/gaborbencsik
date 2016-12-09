var photos = [
  {"file": "1.jpg", "title": "valami", "description": "még valami más"},
  {"file": "2.jpg", "title": "valami + ", "description": "még valami más"},
  {"file": "3.jpg", "title": "MÉG valami ", "description": "még valami más"},
  {"file": "4.jpg", "title": " Noé valami", "description": "még valami másdfgdfg"},
  {"file": "5.jpg", "title": "Még Noébb valami", "description": "még valami más"},
  {"file": "6.jpg", "title": " stb valami", "description": "még valami másdfgdfg"},
  {"file": "7.jpg", "title": "valami stb", "description": "még valami más"},
  {"file": "8.jpg", "title": "nagyon valami", "description": "még valami más"},
  {"file": "9.jpg", "title": "hihetetlenül valami", "description": "még valfsfgami más"},
  {"file": "10.jpg", "title": "rettentöen valami", "description": "még valfgdfami más"},
];

var hero = document.querySelector('.hero-photo');
var titleText = document.querySelector('.title');
var descriptionText = document.querySelector('.description');
var navigation = document.querySelector('.tumbnail-images');
var rightArrow = document.querySelector('.next');
var leftArrow = document.querySelector('.previous');
var slides = document.querySelectorAll('tumbnail');
var arrows = document.querySelectorAll('a div');

var imageIndex = 0;

rightArrow.addEventListener('click', moveRight);
leftArrow.addEventListener('click', moveLeft);

// beállítani a kezdö képeket


function moveRight(event) {
  imageIndex++;
  hero.style.backgroundImage = "url(photos/" +  photos[imageIndex]["file"] + ")";
  titleText.innerHTML = photos[imageIndex]["title"]
  descriptionText.innerHTML = photos[imageIndex]["description"];
}

function moveLeft(event) {
  imageIndex--;
  hero.style.backgroundImage = "url(photos/" +  photos[imageIndex]["file"] + ")";
  titleText.innerHTML = photos[imageIndex]["title"]
  descriptionText.innerHTML = photos[imageIndex]["description"];
}
