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
    const id = +req.params.id;
    let product = products.find(p => p.id === id);

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

const remove = (req, res) => {
    const id = +req.params.id;

    for (let i = 0; i < products.length; i++) {
        if (products[i].id === id) {
            products.splice(i, 1);
            break;
        }
    }

    res.status(204); // No Content
    res.send();
}

const update = (req, res) => {
    const id = +req.params.id;
    const body = req.body;

    const product = products.find(p => p.id === id);

    product.brand = body.brand;
    product.model = body.model;
    product.price = body.price;
    product.inStock = body.inStock;

    res.status(204);
    res.send('Updated');
}

const patch = (req, res) => {
    const id = +req.params.id;
    const { body } = req;

    const product = products.find(p => p.id === id);
    // reflection
    for (let key in body) {
        product[key] = body[key];
        //ex: product.inStock = body.inStock
    }

    res.status(204);
    res.send();
}

module.exports = {
    get,
    add,
    getById,
    remove,
    update,
    patch,
};

// Naukri.com
// firstName, phoneNumber
// personal details
// educational details X, +2, Btech, PG
// experience 

// story or task or feature
// analysis
// PUT http://localhost:3000/products/:id
// body: {brand, model,price,inStock}
// 204 no content
// req -> index.js -> routes -> controllers -> response
// GET, POST, DELETE, PUT, PATCH
// full update, all the fields, null
// PATCH: partial updates
// {brand, model,price,inStock}  brand: 'Apple', model: inStock:undefined
// {brand, model,price,inStock}, {inStock:false}
// 100s
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
// CRUD
// facebook post

// CRUD
// Mongodb JS api
// relational db

/*
    PATCH http://loclhost:3000/products/:id
    payload: {inStock:true}
    status: 204

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

// DELETE : http://localhost:3000/products/:id
// BODY: -
