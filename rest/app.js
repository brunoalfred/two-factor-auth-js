
const express = require('express');
const app = express();
const port = 5000;

// ? LIstening to a port in a server
app.listen(port, () =>
    console.log(`Now listening at server in port ${port}`));


//  Route created

// ?  For a get Request
app.get('/', (req, res) => {
    res.send('Hello World');
});

