const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

// To get notified of anything that has happened during
// the Above process of connecting to database

var db = mongoose.connection;
db.on('error', console.er)