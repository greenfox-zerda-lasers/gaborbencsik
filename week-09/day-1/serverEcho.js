var http = require('http');

var server = http.createServer(function server(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end( 'request from: ' + req.url + ' with ' + req.method +  ' method, on ' + new Date().toString());
});

server.listen(3000, '127.0.0.1');
