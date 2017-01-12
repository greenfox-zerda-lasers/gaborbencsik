'use strict';

console.log('script is running');
let metadata = [];
let playlists = [];

window.onload = function (event) {

  let http = new XMLHttpRequest();
  http.onreadystatechange = function () {
    if (http.readyState == XMLHttpRequest.DONE) {
      metadata = JSON.parse(http.response);
    };
  };

  http.open('GET', 'http://localhost:3000/playlist-tracks', true);
  http.send();
};
window.onload = function (event) {

  let http = new XMLHttpRequest();
  http.onreadystatechange = function () {
    if (http.readyState == XMLHttpRequest.DONE) {
      playlists = JSON.parse(http.response);
    };
  };

  http.open('GET', 'http://localhost:3000/playlists', true);
  http.send();
};


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
    console.log('play clicked')
    // if(play.paused) {
    //   play.play();
    // }
    // else {
    //   play.pause();
    // };
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
  playList: document.querySelector('.playlists'),
  listItem: document.createElement('li'),


  renderPlaylists: function(list) {
    list.forEach()
  },


  createNewPlaylist: function (event) {
    console.log(event);
    console.log('new playlist');
    vexModule.promptPlaylistName();
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

const ajax = {

  // request: function(method, resource, data, callback) {
  //   let xhr = new XMLHttpRequest();
  //   xhr.open(method,'http://localhost:3000/'+ resource, true);
  //   xhr.setRequestHeader("Content-Type", "application/json");
  //   xhr.send(data);
  //   console.log(data);
  //   xhr.onreadystatechange = function (res) {
  //     let appData;
  //     if (xhr.readyState === XMLHttpRequest.DONE) {
  //       console.log(appData);
  //       // appData = JSON.parse(req, res);
  //       console.log(appData);
  //       callback(appData);
  //     }
  //   };
  // },

  getPlaylists: function (callback) {
    let http = new XMLHttpRequest();
    http.onreadystatechange = function () {
      if (http.readyState == XMLHttpRequest.DONE) {
        playlists = JSON.parse(http.response);
      };
    };

    http.open('GET', 'http://localhost:3000/playlists', true);
    http.send();
  },

  postNewPlaylist: function (input, callback) {
    let http = new XMLHttpRequest();
    http.onreadystatechange = function () {
      if (http.readyState == XMLHttpRequest.DONE) {
        playlists = JSON.parse(http.response);
      };
    };

    http.open('POST', 'http://localhost:3000/playlists', true);
    http.send();
    // ajax.request('POST', '/playlists', /* ide még kell a json.stringify */)
  },

  deletePlaylist: function () {

  },

  getAllSongs: function () {

  },

  getPlaylistSongs: function () {

  },

  postSongToPlaylist: function () {

  },

  deleteSongFromPlaylist: function () {

  }
}

const vexModule = {
  promptPlaylistName: function () {
    vex.dialog.prompt({
      message: 'Name your playlist',
      placeholder: 'Playlist name',
      callback: function (value) {
        console.log(value)
      }
    })
  },
}


addEvents();
