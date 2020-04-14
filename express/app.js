const express = require('express');
const app = express();
const port = process.env.port || 5000;

// ? Listening to a port in a 
app.listen(port, () => {
    console.log(`Now Listening at port ${port}`);
});

// ? creating an endpoint to a home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});