var mysql = require('mysql');

var express = require('express')

var app = express();

var connection = mysql.createConnection({
  host: 'localhost',     /* ide kell tenni, hogy hol van a szerver*/
  user: 'root',
  password: '1988',
  database: 'bookstore_2',
});

connection.connect(function(error) {
  if (error) {
    console.log('JAAAJ hiba', error);
  } else {
    console.log('Sikerült');
  }
});

app.get('/', function(req, res) {
  connection.query("SELECT book_name, aut_name, cate_descrip, pub_name, book_price FROM book_mast INNER JOIN author ON book_mast.aut_id = author.aut_id INNER JOIN category ON book_mast.cate_id = category.cate_id INNER JOIN publisher ON book_mast.pub_id = publisher.pub_id;", function(err,rows){
    if (err) {
      console.log(err.toString());
      return;
    }
    res.send(rows);
  });
});

app.listen(3000);
// connection.end();
