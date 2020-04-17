// The imports required
const express = require('express');
const path = require('path');
const os = require('os');
const port = process.env.port || 5000;
const app = express();

// Listening to a port
app.listen(port, () => console.log(`Listening to port number ${port}`));

app.get('/', (req, res) =>  res.set('content-type', 'image/svg+xml').send(`
    <svg width="100" height="100">
      <circle cx="50" cy="50" r="40" stroke="blue" stroke-width="4" fill="white" />
    </svg>
  `));

