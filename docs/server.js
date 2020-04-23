var express = require('express');
var app = express();
var port = process.env.PORT ;

app.get('/', (req, res)=>{
    console.log('welcome to my servece');
});