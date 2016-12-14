'use strict';

// Giphy API
//
// https://github.com/Giphy/GiphyAPI
//
// Find the images in the API
// Display the list of the first 16 results's static thumbnail
// If the user clicks on the thumbnail, display the animated GIF

// window.addEventListener('load', function() {
// }

var request = new XMLHttpRequest();
var images = [];
var imageIndex = 0;
request.open('GET', 'http://api.giphy.com/v1/gifs/search?q=css+coding&limit=16&api_key=dc6zaTOxFJmzC', true);
request.send(null);

request.onreadystatechange = function (rsp) {
  console.log(rsp);
  var giphyData;
  if (request.readyState === XMLHttpRequest.DONE) {
    giphyData = JSON.parse(request.response);
    getImages(giphyData);
    images.forEach(createTumbnails);
  }
};

function getImages (giphy) {
  giphy.data.forEach(function(e){
    console.log(e);
    images.push({'animated': e.images.downsized.url, 'static': e.images.downsized_still.url});
  });
  console.log(images);
}

var createTumbnails = function (image) {
  var img = document.createElement('img');
  img.setAttribute('src', image.static);
  img.style.width = 50 + 'px';
  document.body.appendChild(img);
  img.dataset.index = imageIndex;
  imageIndex++;
  img.addEventListener('click', createGif);
};

var createGif = function(e) {
  var bigGif = document.querySelector(".big-gif");
  if (bigGif) {
    document.body.removeChild(bigGif);
  }
  var index = e.target.dataset.index;
  var bigImg = document.createElement('img');
  bigImg.setAttribute('src', images[index].animated);
  bigImg.setAttribute('class', "big-gif");
  bigImg.style.width = '80%';
  document.body.appendChild(bigImg);
}
