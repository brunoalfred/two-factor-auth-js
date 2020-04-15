const express = require('express');
const path = require('path');
const app = express();

const members = require('./Members');
const port = process.env.port || 5000;

// ? Listening to a port where a server was Sta
app.listen(port, () =>
    console.log(`Now Listening at port ${port}`));

// ? creating an endpoint to a home page
app.use(express.static(path.join(__dirname, 'public')));


// * FOr sample get requestc for all members

app.get('/member', (req, res, next) => res.json(members));