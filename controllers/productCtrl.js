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
    const { brand, model, price } = body;

    if (brand && model && price) {
        products.push(body);

        res.status(201); // created
        res.send('Created');
    } else {
        res.status(400);
        res.send('Brand, Model and Price fields are required');
    }
};

function getById(req, res) {
    const id = req.params.id;
    let product = products.find(p => p.model == id);

    // for (let i = 0; i < products.length; i++) {
    //     if (products[i].id == id) {
    //         product = products[i];
    //         break;
    //     }
    // }

    if (product) {
        res.status(200);
        res.json(product);
    } else {
        res.status(404);
        res.send('Not found');
    }
}

module.exports = {
    get,
    add,
    getById,
};


// REST API
// GET, POST, PUT, DELETE, PATCH
// MongoDB (CRUD)
// Mongoose (drivers)
// pagination 
// searching 
// sorting 
// authentication 
// authorization RBAC
// CI CD pipeline
// Cloud Deployment
// summary detail
// 100 products
// 1 product reviews, ratings, questions, offers

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

// module.exports = {
//     get: get,
//     add: add
// };
