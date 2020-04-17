const express = require('express');
const router = express.Router();

// middleware to log time
router.use(function (req, res) {
    console.log('Time:', Date.now())    ;
    next();

});
// homepage route
router.get('/', () => res.send('This is Home Page'));