http = require ('http');
fs = require('fs');
port = 6789;


var server = http.createServer(function (request, response) {
    console.log(request.url);
    if (request.url === "/"){
        fs.readFile('./index.html', 'utf8', 
            function (err, data) {
                if (err) throw err;
                response.end(data);
            });
    } else if (request.url === "/ninjas") {
        fs.readFile('./ninjas.html', 'utf8', 
            function (err, data) {
                if (err) throw err;
                response.end(data);
            });
    } else if (request.url === "/dojos/new") {
        fs.readFile('./dojos.html', 'utf8', 
            function (err, data) {
                if (err) throw err;
                response.end(data);
            });
    } else {
        response.writeHead(404);
        response.end("<html><h2>404 - this is not the page you're looking for</h2></html>");
    }
})

server.listen(port);
// request.url
