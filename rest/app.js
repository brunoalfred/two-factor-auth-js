const express = require('express');

const app = express();

// ? Listening to Port a server at port 5000
app.listen(5000);

// ? MiddleWare
app.use('/posts', ()=> {
    console.log('This is a MiddleWare Running');
});



// ? Routes 
app.get('/', (req, res) => {
    res.send('We are on the Home Page!');
});

app.get('/posts', (req, res) => {
    res.send('We are on the Posts Page!');
});





