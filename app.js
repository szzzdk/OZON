var http = require('http');
var fs = require('fs');

function serveStaticFile(res, path, contentType, responseCode) {
    if (!responseCode) { responseCode =  200; }
    fs.readFile(__dirname + path, function(err, data) {
        if (err) {
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end("500 - Internal Error");
        }
        else {
            res.writeHead(responseCode, {'Content-Type' : contentType});
            res.end(data);
        }
    })
}

http.createServer(function(req, res) {
    var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
    switch(path) {
        case '':
            serveStaticFile(res, '/index.html', 'text/html');
            break;
        case '/about':
            serveStaticFile(res, '/about.html', 'text/html');
            break;
        case '/additional__info':
            serveStaticFile(res, '/additional__info.html', 'text/html');
            break;
        case '/applic__area':
            serveStaticFile(res, '/applic__area.html', 'text/html');
            break;
        case '/areas__agricul':
            serveStaticFile(res, '/areas__agricul.html', 'text/html');
            break;
        case '/areas__husbandry':
            serveStaticFile(res, '/areas__husbandry.html', 'text/html');
            break;
        case '/areas__poultry':
            serveStaticFile(res, '/areas__poultry.html', 'text/html');
            break;
        case '/clients':
            serveStaticFile(res, '/clients.html', 'text/html');
            break;
        case '/contacts':
            serveStaticFile(res, '/contacts.html', 'text/html');
            break;
        case '/documentation':
            serveStaticFile(res, '/documentation.html', 'text/html');
            break;
        case '/household__catalog':
            serveStaticFile(res, '/household__catalog.html', 'text/html');
            break;
        case '/industrial__catalog':
            serveStaticFile(res, '/industrial__catalog.html', 'text/html');
            break;
        case '/news':
            serveStaticFile(res, '/news.html', 'text/html');
            break;
        case '/product__info':
            serveStaticFile(res, '/product__info.html', 'text/html');
            break;
        case '/services':
            serveStaticFile(res, '/services.html', 'text/html');
            break;
        case '/special__features':
            serveStaticFile(res, '/special__features.html', 'text/html');
            break;
        case '/specifications':
            serveStaticFile(res, '/specifications.html', 'text/html');
            break;
        case "/style.css":
            serveStaticFile(res, '/style.css', 'text/css');
            break;
        case "/main.js":
                serveStaticFile(res, '/main.js', 'text/javascript');
                break;
        default:
            serveStaticFile(res, '/error.html', 'text/html', 404);
            break;
    }
}).listen(3000);

console.log("Server started on localhost:3000; press Ctrl+C to terminate");