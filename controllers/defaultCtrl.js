// numbers
// 1xx -> information
// 2xx -> success, 200, 201 204 
// 3xx -> redirect 301, 302
// 4xx -> client error 400, 401, 404
// 5xx -> server error 500, 501, 504

class DefaultCtrl {
    get(req, res) {
        // status codes
        res.status(200);
        res.send('Express JS!');
    }

    health(req, res) {
        res.status(200);
        const data = { status: 'Up' };
        res.json(data);
    }
}

module.exports = DefaultCtrl;