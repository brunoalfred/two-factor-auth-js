const express = require('express');
const app = express();
const port = 5000;

// ? Listening to a port 5000 in a server
app.listen(port, () => {
    console.log(`Listening to server in port ${port}`);
});


// ! Creating a Route

// ? A Three callBacks

var cb0 = function(req, res, next) {
    console.log('First CallBack');
    next();
}

var cb1 = function(req, res, next) {
    console.log('Second CallBack');
    next();
}

var cb2 = function(req, res, next) {
    res.send('I\'m the CallBack 3');
    next();
}

var cb3 = function(req, res) {
    console.log("The final CallBack");
}

app.get('/', [cb0, cb1, cb2, cb3])