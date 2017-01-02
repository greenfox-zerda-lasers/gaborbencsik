'use strict';

var mysql = require('mysql');

var express = require('express');

var bodyParser = require('body-parser');

var server = express();

var connection = mysql.createConnection({
  host: 'localhost',     /* ide kell tenni, hogy hol van a szerver*/
  user: 'root',
  password: '1988',
  database: 'todo',
});

connection.connect(function connectMsql(error) {
  if (error) {
    console.log('JAAAJ hiba', error);
  } else {
    console.log('Sikerült');
  }
});

server.use(function use(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, DELETE');
  next();
});

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

server.get('/todos', function get(req, res) {
  connection.query('SELECT id, text, completed FROM todo_list;', function getCallback(err, rows) {
    if (err) {
      console.log(err.toString());
      return;
    }
    res.send(rows);
  });
});

server.post('/todos', function post(req, res) {
  connection.query('INSERT INTO todo_list (text, completed) VALUES (\'' + req.body.text + '\', 0);', function postCallback(err, row) {
    if (err) {
      console.log(err.toString());
      return;
    }
    res.send(row);
  });
});

server.delete('/todos/:id', function dropitem(req, res) {
  connection.query('DELETE FROM todo_list WHERE id = \'' + req.params.id + '\';', function getCallback(err, rows) {
    if (err) {
      console.log(err.toString());
      return;
    }
    res.send(rows);
  });
});

server.put('/todos/:id', function put(req, res) {
  connection.query('UPDATE todo_list SET completed = NOT completed WHERE id = \'' + req.params.id + '\';', function getCallback(err, rows) {
    if (err) {
      console.log(err.toString());
      return;
    }
    res.send(rows);
  });
});

server.listen(3000);
// connection.end();
