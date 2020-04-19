// * including the needed modules in the server module
const express = require('express');
const dotenv = require('dotenv');

const app = express();

// LOad the config file
dotenv.config({ path: './config/config.env' });

const port = process.env.PORT || 5000;

// LIstening to port number 5000 by the server
app.listen(port, () =>
    console.log(`server running on ${process.env.NODE_ENV} mode on port no. ${port}`));
