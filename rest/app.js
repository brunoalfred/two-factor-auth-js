const express = require('express');
const app = express();
const port = 5000;

// ? Listening to a port
app.listen(port, () => {
    console.log(`Now Listening to port ${port}`)
});


// ? MiddleWare functions
app.use('/user/:id', (req, res, next) => {
    console.log('Request Type:', req.method);
    next();
});