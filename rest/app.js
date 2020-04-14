const express = require('express');
const app = express();
const port = 5000;

// ? Listening to a port
app.listen(port, () => {
    console.log(`Now Listening to port ${port}`);

});


// ? MiddleWare functions
app.use('/', () => {
    console.log('THe Middle Ware is running');
});





// ? ROutes
app.get('/', (req, res) => {
    res.send('Home Page')
});