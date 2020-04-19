// * including the needed modules in the server module
const express = require('express');
const dotenv = require('dotenv');

const app = express();

// LOad the config file
dotenv.config({ path: './config/config.env' });

const port = process.env.PORT || 5000;

// LIstening to port number 5000 by the server
app.listen(port, () =>
    console.log(`server running on ${process.env.NODE_ENV} mode on port no. ${port}`));

app.get('/api/v1/bootcamps', (req, res) => {
    res.status(200).json({ success: true, msg: 'Show all the Bootcamps' })
});

app.get('/api/v1/bootcamps/:id', (req, res) => {
    res.status(200).json({ success: true, msg: `Get  bootcamp ${req.params.id}` });
});

app.post('/api/v1/bootcamps', (req, res) => {
    res.status(200).json({ success: true, msg: 'Create a new Bootcamps ' })
});

app.put('/api/v1/bootcamps/:id', (req, res) => {
    res.status(200).json({ success: true, msg: `Update bootcamp ${req.params.id}` });
});

app.delete('/api/v1/bootcamps/:id', (req, res) => {
    res.status(200).json({ success: true, msg: `Delete a bootcamp ${req.params.id}` })
});

