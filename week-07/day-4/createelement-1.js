var listItems = document.querySelector('ul.asteroids');

var newListItem1 = document.createElement('li');
var newListItem2 = document.createElement('li');
newListItem1.textContent = 'The Green Fox';
newListItem2.textContent = 'The Lamplighter';

listItems.appendChild(newListItem1);
listItems.appendChild(newListItem2);

var newHeading = document.createElement('h1');
newHeading.textContent = "I can add elements to the DOM!";
document.querySelector('.container').appendChild(newHeading);

var newImage = document.createElement('img');
newImage.setAttribute('src', 'http://keenthemes.com/preview/metronic/theme/assets/global/plugins/jcrop/demos/demo_files/image1.jpg');
document.querySelector('.container').appendChild(newImage);
