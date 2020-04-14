const express = require('express');
const app = express();
const port = 5000;

// ? Listening to a port
app.listen(port, () => {
    console.log(`Now Listening to port ${port}`);

});



// ?  ROutes
// Home Page Route

app.get('/', (req, res, next) => {
    res.send('Welcome to Our App');
    next();
});

app.get('/login', (req, res, next) => {
    res.send('Login Page');
    next();
});