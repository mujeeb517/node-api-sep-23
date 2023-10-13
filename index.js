const express = require('express');
const productCtrl = require('./controllers/productCtrl');
const DefaultCtrl = require('./controllers/defaultCtrl');
const data = require('./controllers/testCtrl');


console.log('data', data);

const app = express();

app.listen(3000, () => console.log('server is running on 3000!'));

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
const defaultCtrl = new DefaultCtrl();
app.get('/', defaultCtrl.get);
app.get('/health', defaultCtrl.health);
app.get('/products', productCtrl);
