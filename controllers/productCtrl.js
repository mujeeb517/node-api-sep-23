const get = (req, res) => {
    const products = [
        { id: 1, brand: 'Apple', model: 'iPhone 13', price: 600, inStock: true },
        { id: 2, brand: 'Apple', model: 'iPhone 14', price: 700, inStock: false },
        { id: 3, brand: 'Apple', model: 'iPhone 15', price: 800, inStock: true },
    ];

    res.status(200);
    res.json(products);
};


module.exports = get;