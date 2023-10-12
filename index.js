const http = require('http');
const fs = require('fs');
// call back
// routing

const products = [
    { id: 1, brand: 'Apple', model: 'iPhone 13', price: 600, inStock: true },
    { id: 2, brand: 'Apple', model: 'iPhone 14', price: 700, inStock: false },
    { id: 3, brand: 'Apple', model: 'iPhone 15', price: 800, inStock: true },
];

// serialization: RAM->transfer, save
// deserialization: json -> variables
function handler(req, res) {
    switch (req.url) {
        // www.google.com/about.html
        case '/':
            res.write('Hello Nodejs');
            res.end();
            break;

        case '/products':
            res.write(JSON.stringify(products));
            res.end();
            break;

        case '/home':
            const contents = fs.readFileSync('index.html');
            res.write(contents);
            res.end();
            break;

        default:
            res.write('Page you are looking for is not found');
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
// http server
// tcp port
// listens
