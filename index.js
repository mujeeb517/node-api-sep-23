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
app.use(bodyParser.json());
app.use('/', defaultRouter);
app.use('/', productRouter);


// index.js -> routes -> controllers