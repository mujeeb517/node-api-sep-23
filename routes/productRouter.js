const express = require('express');
const productCtrl = require('../controllers/productCtrl');
const router = express.Router();

router.get('/products', productCtrl.get);
// GET http://localhost:3000/products
// POST http://localhost:3000/products
router.post('/products', productCtrl.add);

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
