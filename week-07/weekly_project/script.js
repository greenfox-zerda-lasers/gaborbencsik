var photos = [
  {"file": "1.jpg", "title": "First photo", "description": "1 photo description"},
  {"file": "2.jpg", "title": "Second photo", "description": "2 photo description"},
  {"file": "3.jpg", "title": "Third photo", "description": "3 photo description"},
  {"file": "4.jpg", "title": "Fourth photo", "description": "4 photo description"},
  {"file": "5.jpg", "title": "Fifth photo", "description": "5 photo description"},
  {"file": "6.jpg", "title": "Sixth photo", "description": "6 photo description"},
  {"file": "7.jpg", "title": "Seventh photo", "description": "7 photo description"},
  {"file": "8.jpg", "title": "Eighth photo", "description": "8 photo description"},
  {"file": "9.jpg", "title": "Ninth photo", "description": "9 photo description"},
  {"file": "10.jpg", "title": "Tenth photo", "description": "10 photo description"}
];

var imageIndex = 0;
var photoAmount = photos.length;

var hero = document.querySelector('.hero-photo');
hero.style.backgroundImage = "url(photos/" +  photos[imageIndex]["file"] + ")";

var titleText = document.querySelector('.title');
var descriptionText = document.querySelector('.description');

var tumbnails = document.querySelector('.tumbnail-images');

var rightArrow = document.querySelector('.next');
var leftArrow = document.querySelector('.previous');
var firstTumb = tumbnails.children[0];
var secondTumb = tumbnails.children[1];
var thirdTumb = tumbnails.children[2];
var fourthTumb = tumbnails.children[3];
var fifthTumb = tumbnails.children[4];

createTumbnails();

rightArrow.addEventListener('click', moveRight);
leftArrow.addEventListener('click', moveLeft);

// loop-ba:

firstTumb.addEventListener('click', goToPhoto);
secondTumb.addEventListener('click', goToPhoto);
thirdTumb.addEventListener('click', goToPhoto);
fourthTumb.addEventListener('click', goToPhoto);
fifthTumb.addEventListener('click', goToPhoto);

function validateIndex() {
  if (imageIndex === photoAmount) {
    imageIndex = 0;
  } else if (imageIndex < 0) {
    imageIndex = photoAmount;
  }
}

function moveRight(event) {
  imageIndex++;
  validateIndex();
  changePhoto();
  createTumbnails();
}

function moveLeft(event) {
  imageIndex--;
  validateIndex();
  changePhoto();
  createTumbnails();
}

function changePhoto() {
  hero.style.backgroundImage = "url(photos/" +  photos[imageIndex]["file"] + ")";
  titleText.innerHTML = photos[imageIndex]["title"]
  descriptionText.innerHTML = photos[imageIndex]["description"];
}

function createTumbnails () {
  tumbnails.children[2].style.backgroundImage = "url(photos/" +  photos[imageIndex]["file"] + ")";
  tumbnails.children[2].dataset.index = imageIndex;

  if (imageIndex === 0) {
    tumbnails.children[1].style.backgroundImage = "url(photos/" +  photos[photoAmount-1]["file"] + ")";
    tumbnails.children[1].dataset.index = photos[photoAmount-1];
    tumbnails.children[0].style.backgroundImage = "url(photos/" +  photos[photoAmount-2]["file"] + ")";
    tumbnails.children[0].dataset.index = photos[photoAmount-2];
    tumbnails.children[3].style.backgroundImage = "url(photos/" +  photos[imageIndex+1]["file"] + ")";
    tumbnails.children[3].dataset.index = imageIndex+1;
    tumbnails.children[4].style.backgroundImage = "url(photos/" +  photos[imageIndex+2]["file"] + ")";
    tumbnails.children[4].dataset.index = imageIndex+2;

  } else if (imageIndex === 1) {
    tumbnails.children[0].style.backgroundImage = "url(photos/" +  photos[photoAmount-1]["file"] + ")";
    tumbnails.children[0].dataset.index = photos[photoAmount-1];
    tumbnails.children[1].style.backgroundImage = "url(photos/" +  photos[imageIndex-1]["file"] + ")";
    tumbnails.children[1].dataset.index = imageIndex-1;
    tumbnails.children[3].style.backgroundImage = "url(photos/" +  photos[imageIndex+1]["file"] + ")";
    tumbnails.children[3].dataset.index = imageIndex+1;
    tumbnails.children[4].style.backgroundImage = "url(photos/" +  photos[imageIndex+2]["file"] + ")";
    tumbnails.children[4].dataset.index = imageIndex+2;

  } else if (imageIndex === photoAmount-1) {
    tumbnails.children[0].style.backgroundImage = "url(photos/" +  photos[imageIndex-2]["file"] + ")";
    tumbnails.children[0].dataset.index = imageIndex-2;
    tumbnails.children[1].style.backgroundImage = "url(photos/" +  photos[imageIndex-1]["file"] + ")";
    tumbnails.children[1].dataset.index = imageIndex-1;
    tumbnails.children[3].style.backgroundImage = "url(photos/" +  photos[0]["file"] + ")";
    tumbnails.children[3].dataset.index = 0;
    tumbnails.children[4].style.backgroundImage = "url(photos/" +  photos[1]["file"] + ")";
    tumbnails.children[4].dataset.index = 1;

  } else if (imageIndex === photoAmount-2) {
    tumbnails.children[0].style.backgroundImage = "url(photos/" +  photos[imageIndex-2]["file"] + ")";
    tumbnails.children[0].dataset.index = imageIndex-2;
    tumbnails.children[1].style.backgroundImage = "url(photos/" +  photos[imageIndex-1]["file"] + ")";
    tumbnails.children[1].dataset.index = imageIndex-1;
    tumbnails.children[3].style.backgroundImage = "url(photos/" +  photos[imageIndex+1]["file"] + ")";
    tumbnails.children[3].dataset.index = imageIndex+1;
    tumbnails.children[4].style.backgroundImage = "url(photos/" +  photos[0]["file"] + ")";
    tumbnails.children[4].dataset.index = 0;

  } else {
    tumbnails.children[1].style.backgroundImage = "url(photos/" +  photos[imageIndex-1]["file"] + ")";
    tumbnails.children[1].dataset.index = imageIndex-1;
    tumbnails.children[0].style.backgroundImage = "url(photos/" +  photos[imageIndex-2]["file"] + ")";
    tumbnails.children[0].dataset.index = imageIndex-2;
    tumbnails.children[3].style.backgroundImage = "url(photos/" +  photos[imageIndex+1]["file"] + ")";
    tumbnails.children[3].dataset.index = imageIndex+1;
    tumbnails.children[4].style.backgroundImage = "url(photos/" +  photos[imageIndex+2]["file"] + ")";
    tumbnails.children[4].dataset.index = imageIndex+2;

  }
}

function goToPhoto (event) {
  console.log(this.dataset.index);

  imageIndex = parseInt(this.dataset.index);
  validateIndex();
  changePhoto();
  createTumbnails();
}

console.log(imageIndex-1);
console.log(imageIndex-2);
console.log(imageIndex);
console.log(imageIndex+1);
console.log(imageIndex+2);
