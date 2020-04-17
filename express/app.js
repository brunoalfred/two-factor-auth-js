const express = require('express');
const path = require('path');
const app = express();

const members = require('./Members');
const port = process.env.port || 5000;

// ? Listening to a port where a server was Sta
app.listen(port, () =>
    console.log(`Now Listening at port ${port}`));

app.get('/', (req, res) => res.send('Hello World'));