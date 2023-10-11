const http = require('http');

const server = http.createServer();

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
