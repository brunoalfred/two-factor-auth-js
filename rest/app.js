
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

// ? For a post Request
app.post('/sent', (req, res) => {
    res.send('Post Method Successful');
});

// ? For a PUT method
app.put('/put', (req, res) => {
    res.send('Put Method Succesfull');
});

// ? For a DELETE MEthod
app.delete('/deletion', (req, res) => {
    res.send('Deletion Method Successful');
})