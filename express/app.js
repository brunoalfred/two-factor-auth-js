const express = require('express');
const app = express();
const port = process.env.port || 5000;

// ? Listening to a port where a server was Sta
app.listen(port, () => {
    console.log(`Now Listening at port ${port}`);
});

// ? creating an endpoint to a home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});