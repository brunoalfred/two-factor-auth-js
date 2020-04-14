const express = require('express');

app.express();

// ? Routes
app.get('/', (req, res) => {res.send('We are on the Home Folder!')});



// ? Listening to Port a server at port 5000
app.listen(5000);

