'use strict';

var express = require('express');
var app = express();
var tracks = [
    { "id": 21, "title": "Halahula", "artist": "Untitled artist", "duration": 545, "path": "c:/music/halahula.mp3" },
    { "id": 412, "title": "No sleep till Brooklyn", "artist": "Beastie Boys", "duration": 312.12, "path": "c:/music/beastie boys/No sleep till Brooklyn.mp3" }
];

var bodyParser = require('body-parser');

server.use(function use(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, DELETE');
  next();
});

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

// Setup server

app.get('/playlists', function (req, res) {
  res.json(tracks);
});

app.post('/playlists', function(req, res) {

});

app.delete('/playlists/:id', function(req, res) {

});

app.get('/playlis-tracks/', function(req, res) {

});

app.get('/playlis-tracks/:playlist_id', function(req, res) {

});

app.post('/playlist-tracks/:playlist_id', function(req, res) {

});

app.delete('/playlist-tracks/:playlist_id/:track_id', function(req, res) {

});

app.listen(3000);

module.exports = app;
