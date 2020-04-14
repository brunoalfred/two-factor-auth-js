const express = require('express');
const app = express();
const port = 5000;

// ? Listening to a port
app.listen(port, () => {
    console.log(`Now Listeninf to port ${port}`)
});

app.use((req, res, next) => {
    console.log('Time:', Date.now());
    next();
});