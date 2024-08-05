// Create web server
// Start web server
// Handle request
//    if request is for /comment
//       read the comment file
//       return the content
//    else
//       return 404
// Stop web server

var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
    if(req.url === '/comment') {
        fs.readFile('comment.txt', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end(data);
        });
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('404 Not Found\n');
    }
});

server.listen(3000, '