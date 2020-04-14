const express = require('express');
const app = express();
const port = 5000;

// ? Listening to a port 5000 in a server
app.listen(port, () => {
    console.log(`Listening to server in port ${port}`);
});


// ! Creating a Route

// ? ROute with multiple callbacks
app.get('/one', (req, res, next) => {
    console.log('The response will be sent by the next function');
    next();     
}, (req, res, next) => {
    res.send('Hello I\'m the second callBack');
    console.log('The response was sent by the previous function');
    next();

}, (req, res) => {
    console.log('Last callback');
});