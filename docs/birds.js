const express = require('express');
const router = express.Router();

// middleware to log time
router.use(function (req, res, next) {
    console.log('Time:', Date.now())    ;
    next();

});
// homepage route
router.get('/', (req, res) => res.send('This is Home Page'));

// About route
router.get('/about', (req, res) => res.send('This is About Page'));