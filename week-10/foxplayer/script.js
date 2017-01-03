const addEvents = () => {
  let createPlaylist = document.querySelector('.create-playlist');
  createPlaylist.addEventListener('click', createNewPlaylist());
  let allTracks = document.querySelector('.all-tracks');
  allTracks.addEventListener('click', listAllTracks());
  let favoriteTracks = document.querySelector('.favorites');
  favoriteTracks.addEventListener('click', listFavorites());
  let addSongToPlaylist = document.querySelector('.song-to-playlist');
  addSongToPlaylist.addEventListener('click', addSongToList());
  let starIcon = document.querySelector('.ion-ios-star');
  starIcon.addEventListener('click', addToFavorites());

  let rewind = document.querySelector('.ion-ios-rewind');
  rewind.addEventListener('click', audioModule.rewindTrack();
  let play = document.querySelector('.ion-ios-play');
  play.addEventListener('click', audioModule.playSong());
}

const audioModule = {
  rewindTrack: function (event) {
    console.log(event);
  },
  playSong:

}

const uiModule = {

}

createNewPlaylist = function (event) {
  console.log(event);
}

listAllTracks = function (event) {
  console.log(event);
}

listFavorites = function (event) {
  console.log(event);
}

addSongToList = function (event) {
  console.log(event);
}

addToFavorites = function (event) {
  console.log(event);
}
