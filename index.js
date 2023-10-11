const http = require('http');

// call back
// routing
function handler(req, res) {
    switch (req.url) {
        case '/':
            res.write('Hello Nodejs');
            res.end();
            break;

        case '/products':
            res.write('Products');
            res.end();
            break;

        case '/home':
            res.write('home');
            res.end();
            break;
    }
}

const server = http.createServer(handler);

const port = 3000;

const cb = () => {
    console.log('listening on port 3000');
};
// async
server.listen(port, cb);


// development
// your machine client & server
// localhost
// testing
// 192.38.49.59 -> 187.78.85.20
