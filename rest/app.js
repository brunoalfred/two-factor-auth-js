const express = require('express');
const app = express();
const port = 5000;

// ? Listening to a port 5000 in a server
app.listen(port, () => {
    console.log(`Listening to server in port ${port}`);
});


// ! Creating a Route

app.get('/', (req, res, next) => {
    console.log('Callback 1');
    next();
}, (req, res, next) => {
    console.log('Callback 2');
    next();
}, (req, res, next) => {
    console.log('Callback 3');
    next();
}, (req, res, ) => {
    res.send('I\'m the final Callback!');
});