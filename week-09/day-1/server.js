'use strict';

var express = require('express');

var exampleApp = express();

exampleApp.get('/', function get(request, response) {
  response.send('HelloHallo - wtf?');
});

exampleApp.post('/', function post(request, response) {
  response.send('Postolál - wtf?');
});

exampleApp.listen(3000);
