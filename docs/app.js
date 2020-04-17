const express = require('express');
const app = express();
const port = process.env.port || 5000;

//import custome modules
const birds = require('./birds');
app.use('/birds', birds);
