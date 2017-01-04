'use strict';

// var mqsql = require('mysql');
var express = require('express');
var app = express();

var bodyParser = require('body-parser');

// var connection = mysql.createConnection({
//   host: 'localhost',     /* ide kell tenni, hogy hol van a szerver*/
//   user: 'root',
//   password: '1988',
//   database: 'todo',
// });
//
// connection.connect(function connectMsql(error) {
//   if (error) {
//     console.log('JAAAJ hiba', error);
//   } else {
//     console.log('Sikerült');
//   }
// });

var tracks = [
    { "id": 21, "title": "Halahula", "artist": "Untitled artist", "duration": 545, "path": "c:/music/halahula.mp3" },
    { "id": 412, "title": "No sleep till Brooklyn", "artist": "Beastie Boys", "duration": 312.12, "path": "c:/music/beastie boys/No sleep till Brooklyn.mp3" }
];


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
