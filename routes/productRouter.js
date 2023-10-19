const express = require('express');
const productCtrl = require('../controllers/productCtrl');
const router = express.Router();

router.get('/products', productCtrl.get);
// GET http://localhost:3000/products
// POST http://localhost:3000/products
router.post('/products', productCtrl.add);
router.get('/products/:id', productCtrl.getById);
router.delete('/products/:id', productCtrl.remove);

module.exports = router;

// Read list of products
// Create a new product
// delete a product
// update a product

// CRUD
// HTTP Verbs 
// signup: creating 
// modify: update
// GET, POST, PUT, DELETE, PATCH

// controller -> routes -> index.js

// GetById
// URL:GET http://localhost:3000/products/:id
// http://localhost:3000/products/10

// FilterProducts
// endpoint, routes, URL
// I want to filter products by brand name and model name
// URL:GET http://localhost:3000/products/brand/:brand/model/:model/id/:id
// example: http://localhost:3000/products/brand/Apple/model/Iphone/id/10
//  example: http://localhost:3000/products/Apple/Iphone/10
// SEO
