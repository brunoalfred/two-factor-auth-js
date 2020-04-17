// The imports required
const express = require('express');
const path = require('path');
const os = require('os');
const port = process.env.port || 5000;
const app = express();

// Listening to a port
app.listen(port, () => console.log(`Listening to port number ${port}`));

app.get('/', (req, res) => res.json(Members.jso));


