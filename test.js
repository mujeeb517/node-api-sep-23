function app() {
    console.log('app');
}

// first class citizen
app.x = 10;
app.router = function () {
    console.log('router fn');
}

console.log(app.router());