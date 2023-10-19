const express = require('express');
const defaultRouter = require('./routes/defaultRouter');
const productRouter = require('./routes/productRouter');
const bodyParser = require('body-parser');

const app = express();

app.listen(3000, () => console.log('server is running on 3000!'));

// www.example.com
// products click 
// ui -> GET: http://localhost/products
// add a product
// signup -> firstname, lastname, email, password, confirm password -> submit
// POST : saves to db
// layered system
// routing
// framework
// livereload
// nodemon
// modules: package, library, file
// entry file - smaller
// export
// import
// endopint
// google maps Uber, Ola
// monitoring tools
// client - server contract
// Mongodb
// install mongodb
app.use(bodyParser.json());
app.use('/', defaultRouter);
app.use('/api/products', productRouter);
// app.use('/api/users',userRouter);

// index.js -> routes -> controllers

// REST API
// Representational state transfer
// concept JS, Java, C#, Python, NodeJS
// everything is a resource
// GET: 1 or 1million safe operation, POST, PUT, DELETE: unsafe operation
// 6 principles
// 1. Client - Server (http)
// 2. Unifrom interface
// 3. Stateless (scale)
// 4. Layered system
// 5. Cacheability 
// 6. Hateos

/*
REDIS : stale data
DB: slow
     {
        "id": 1,
        "brand": "Apple",
        "model": "iPhone 13",
        "price": 600,
        "inStock": false
        "link": "/products/1"
    },
*/

// 1 users => 10 requests, different 
//  httP://example.com/api/products  -> .. -> ..

