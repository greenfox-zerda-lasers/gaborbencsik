'use strict';

var test = require('tape');
var request = require('supertest');
var app = require('./index');

// GET playlists

test('Playlists returned', function (t) {
  request(app)
    .get('/playlists')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {
      t.error(err, 'No error');
      t.end();
    });
});

test('Playlists returned ID', function (t) {
  request(app)
    .get('/playlists')
    .expect('Content-Type', /json/)
    .expect(200)
    .expect( function(res) {
      res.body.id = 'track id'
    })
    .end(function (err, res) {
      t.error(err, 'No error');
      t.end();
    });
});

// POST new playlist - /playlists

test('add new playlist' , function (t) {
  request(app)
    .get('/playlists')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {
      t.error(err, 'No error');
      t.end();
    });
});

// DELETE playlists - /playlists/:id

// GET playlist tracks (all tracks) - /playlis-tracks/

// GET

// POST

// DELETE track from the playlist - /playlist-tracks/:playlist_id/:track_id
