var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response) {
  console.log('I got hit!');
  fs.readFile('./welcome.html', 'utf8', 
        function (err, data) {
            if (err) throw err;
            response.end(data);
        });
});

server.listen(8000);