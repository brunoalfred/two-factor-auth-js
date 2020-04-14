const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// ? Listening to a port
app.listen(port, () => {
    console.log(`Now Listening to port ${port}`);

});


// ? The MIddleWare
app.use('/user', (req, res, next) => { 
    if (req.query.admin === 'true'){
        next();
    } else {
        res.send('Not  Authourized');
    }
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

app.get('/user', (req, res, ) => {
    res.send('Congratulation');
});