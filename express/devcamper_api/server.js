// * including the needed modules in the server module
const express = require('express');
const dotenv = require('dotenv');

const app = express();

// LOad the config file
dotenv.config({path: './config/config.env'});

const port = process.env.PORT || 5000;

app.listen(port,  () => console.log())

