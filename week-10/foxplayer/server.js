'use strict';

var mysql = require('mysql');
var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var fs = require('fs');
var meta = require('musicmetadata');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1988',
  database: 'foxplayer',
});

connection.connect(function connectMsql(error) {
  if (error) {
    console.log('JAAAJ hiba', error);
  } else {
    console.log('Sikerült');
  }
});

app.use(function use(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, DELETE');
  next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Setup server

app.get('/', function(req, res) {
  res.send('minden fut');
});

app.get('/playlists', function (req, res) {
  connection.query({
    sql: 'SELECT * FROM playlists;'
  }, function getListsCallback(err, rows) {
      if (err) {
        console.log(err.toString());
        return;
      }
      res.send(rows);
    });
});

app.post('/playlists', function(req, res) {
  connection.query({
    sql: 'INSERT INTO playlists (playlist) VALUES (?);',
    values: ['Fucking music list']
    // values: [req.body.playlist]
  }, function createListCallback(err, rows) {
      if (err) {
        console.log(err.toString());
        return;
      }
      res.send(rows);
    });
});

app.delete('/playlists/:id', function(req, res) {
  connection.query({
    sql: 'DELETE FROM playlists WHERE id = ?;',
    values: ['4']
    // values: [req.body.id]
  }, function deleteListCallback(err, rows) {
      if (err) {
        console.log(err.toString());
        return;
      }
      res.send(rows);
    });
});

app.get('/playlist-tracks/', function(req, res) {
  connection.query({
    sql: 'SELECT * FROM tracks WHERE playlist_id = 0;',
  }, function getAllTracksCallback(err, rows) {
      if (err) {
        console.log(err.toString());
        return;
      }
      var counter = 0;
      var result = [];
      rows.forEach(function (row) {
        var readableStream = fs.createReadStream(row.path);
        var parser = meta(readableStream, { duration: true }, function (err, metadata) {
          counter++;
          if (err) throw err;
          console.log(metadata);
          row.duration = metadata.duration;
          row.title = metadata.title;
          row.artist = metadata.artist;
          result.push(row);
          readableStream.close();
          if (counter === rows.length) {
            res.send(result);
          }
        });
      })
    });
});

app.get('/playlist-tracks/:playlist_id', function(req, res) {
  connection.query({
    sql: 'SELECT * FROM tracks WHERE playlist_id = ?;',
    values: ['1']
    // values: [req.body.id]
  }, function getTracksFromListCallback(err, rows) {
      if (err) {
        console.log(err.toString());
        return;
      }
      var counter = 0;
      var result = [];
      rows.forEach(function (row) {
        var readableStream = fs.createReadStream(row.path);
        var parser = meta(readableStream, { duration: true }, function (err, metadata) {
          counter++;
          if (err) throw err;
          console.log(metadata);
          row.duration = metadata.duration;
          row.title = metadata.title;
          row.artist = metadata.artist;
          result.push(row);
          readableStream.close();
          if (counter === rows.length) {
            res.send(result);
          }
        });
      })
    });
});

app.post('/playlist-tracks/:playlist_id', function(req, res) {
  connection.query({
    sql: 'INSERT INTO tracks (path, playlist_id) VALUES (?, ?);',
    values: ['/Users/bencso/greenfox/gaborbencsik/week-10/foxplayer/music/Doctor_Turtle_-_Doctor_Talos_Answers_The_Door.mp3', '2']
    // values: [req.body.path, req.body.playlist_id]
  }, function createListCallback(err, rows) {
      if (err) {
        console.log(err.toString());
        return;
      }
      res.send(rows);
    });
});

app.delete('/playlist-tracks/:playlist_id/:track_id', function(req, res) {
  connection.query({
    sql: 'DELETE FROM tracks WHERE path = ? AND playlist_id = ? AND id = ?;',
    values: ['/Users/bencso/greenfox/gaborbencsik/week-10/foxplayer/music/Doctor_Turtle_-_Doctor_Talos_Answers_The_Door.mp3', '2', '5']
    // values: [req.body.path, req.body.playlist_id]
  }, function deleteListCallback(err, rows) {
      if (err) {
        console.log(err.toString());
        return;
      }
      res.send(rows);
    });
});

app.listen(3000, function () {
  console.log('Server is running on port: 3000');
});
