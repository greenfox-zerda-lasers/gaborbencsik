const button = document.querySelector('button');
const audio = document.querySelector('audio');

// button.addEventListener('click', function(e) {
  // if(audio.paused) {
  //   audio.play();
  // }
  // else {
  //   audio.pause();
  // }
//
// }, false);

button.addEventListener('click', function(e) {
  vex.dialog.prompt({
    message: 'What planet did the aliens come from?',
    placeholder: 'Planet name',
    callback: function (value) {
      console.log(value)
    }
  })
}, false);
