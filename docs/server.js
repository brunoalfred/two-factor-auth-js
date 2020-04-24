var express = require('express');
var app = express();
var port = process.env.PORT ;

app.get('/', (req, res)=>{
    res.send ('welcome to my servece');
});

app.listen(port, () => {
    console.log(`server running in ${NODE_ENV}in port number ${port}`); 
});