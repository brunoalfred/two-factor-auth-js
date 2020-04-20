const express = require('express');
const dotenv = require('dotenv');

const app = express();
const port =  process.env.PORT || 5000;



//importing the configuration file
dotenv.config({path: './config/config..env'});

// Server listening at port number 5000
app.listen(port, () => {
    console.log(`Server running on ${process.env.NODE_ENV} mode on port ${port}`);
});




















