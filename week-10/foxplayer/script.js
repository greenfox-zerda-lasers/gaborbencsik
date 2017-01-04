console.log('script is running')

const addEvents = () => {
  let createPlaylist = document.querySelector('.create-playlist');
  createPlaylist.addEventListener('click', uiModule.createNewPlaylist);
  let allTracks = document.querySelector('.all-tracks');
  allTracks.addEventListener('click', uiModule.listAllTracks);
  let favoriteTracks = document.querySelector('.favorites');
  favoriteTracks.addEventListener('click', uiModule.listFavorites);
  let addSongToPlaylist = document.querySelector('.song-to-playlist');
  addSongToPlaylist.addEventListener('click', uiModule.addSongToList);
  let starIcon = document.querySelector('.ion-ios-star');
  starIcon.addEventListener('click', uiModule.addToFavorites);

  let rewind = document.querySelector('.ion-ios-rewind');
  rewind.addEventListener('click', audioModule.rewindSong);
  let play = document.querySelector('.ion-ios-play');
  play.addEventListener('click', audioModule.playSong);
  let forward = document.querySelector('.ion-ios-fastforward');
  forward.addEventListener('click', audioModule.forwardSong);
  let shuffle = document.querySelector('.ion-shuffle');
  shuffle.addEventListener('click', audioModule.setRandomSong);
  let mute = document.querySelector('.ion-android-volume-mute');
  mute.addEventListener('click', audioModule.muteVolume);
  let volume = document.querySelector('.volume-slider');
  volume.addEventListener('click', audioModule.setVolume);
}

const audioModule = {
  rewindSong: function (event) {
    console.log(event);
    console.log('rewind clicked');
  },
  playSong: function (event) {
    console.log(event);
    console.log('play clicked');
  },
  forwardSong: function (event) {
    console.log(event);
    console.log('forward clicked');
  },
  setRandomSong: function (event) {
    console.log(event);
    console.log('get random song');
  },
  muteVolume: function (event) {
    console.log(event);
    console.log('volume muted');
  },
  setVolume: function (event) {
    console.log(event);
    console.log('volume changed');
  }
}

const uiModule = {
  createNewPlaylist: function (event) {
    console.log(event);
    console.log('new playlist');
  },

  listAllTracks: function (event) {
    console.log(event);
    console.log('all tracks listed');
  },

  listFavorites: function (event) {
    console.log(event);
    console.log('favs listed');
  },

  addSongToList: function (event) {
    console.log(event);
    console.log('song added to a list');
  },

  addToFavorites: function (event) {
    console.log(event);
    console.log('song added to favs');
  },

}


addEvents();
