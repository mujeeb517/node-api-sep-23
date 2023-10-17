// in memory db
const products = [
    { id: 1, brand: 'Apple', model: 'iPhone 13', price: 600, inStock: true },
    { id: 2, brand: 'Apple', model: 'iPhone 14', price: 700, inStock: false },
    { id: 3, brand: 'Apple', model: 'iPhone 15', price: 800, inStock: true },
];

const get = (req, res) => {
    res.status(200);
    res.json(products);
};

const add = (req, res) => {
    const body = req.body;
    products.push(body);

    res.status(201); // created
    res.send('Created');
};

/*
   id brand, model, price, instcok
   parse
   save
*/



// HTTP 

// GET http://loclhost:3000/products
// POST http://loclhost:3000/products

/*
    URL: http://localhost:3000/products
    VERB: GET/POST/PUT/DELETE
    Request headers:{}
    Response headers: {}
    Body:{}
*/

module.exports = {
    get,
    add
};

// module.exports = {
//     get: get,
//     add: add
// };
