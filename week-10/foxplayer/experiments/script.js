const button = document.querySelector('button');
const audio = document.querySelector('audio');

button.addEventListener('click', function(e) {
  if(audio.paused) {
    audio.play();
  }
  else {
    audio.pause();
  }

}, false);
