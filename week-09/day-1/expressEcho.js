'use strict'; 

var express = require('express');

var echoServer = express();

echoServer.all('/*', function get(req, res) {
  // res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.send( 'request from: ' + req.url + ' with ' + req.method +  ' method, on ' + new Date().toString());
});

echoServer.listen(3000);
