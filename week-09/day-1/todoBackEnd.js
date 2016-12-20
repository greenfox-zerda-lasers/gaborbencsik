'use strict';

var express = require('express');

var bodyParser = require('body-parser');

var server = express();

var data = require('./data.json');

var c = 0;

var idNumber = data.length;

server.use(function use(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, DELETE');
  next();
});

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

server.get('/todos', function get(req, res) {
  res.send(data);
});

server.get('/todos/task/:id', function getId(req, res) {
  res.send( 'The requested task is: ' + JSON.stringify(data[parseInt(req.params.id)]));
});

server.post('/todos', function post(req, res) {
  var text = req.body.text;
  var completed = false;
  idNumber++;
  data.push({
    'completed': completed,
    'id': idNumber,
    'text': text,
  });
  res.send(data[data.length - 1]);
});

server.put('/todos/:id', function post(req, res) {
  // var text = req.body.text;
  var completed = req.body.completed;
  var taskToModify = req.params.id;
  console.log(typeof(completed));
  data.forEach( function(item, index) {
    if (item.id == taskToModify) {
        data[index].completed = completed;
    }
  });

  res.send(data);
});

server.delete('/todos/:id', function post(req, res) {
  var taskToDelete = req.params.id;
  function deleteTask (item) {
    return item.id !== parseInt(taskToDelete);
  }
  data = data.filter(deleteTask);
  res.send(data.filter(deleteTask));
});

server.get('/counter', function counter(req, res) {
  c++;
  res.send( 'value: ' + c);
});

server.get('/all-task-created', function counter(req, res) {
  console.log(idNumber);
  res.send( 'Task created: ' + idNumber);
});

server.listen(3000);
