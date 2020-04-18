// Using the core node module to learn the Request / Response circle
const http = require('http');
const port = process.env.port || 5000;


// ? The server is initiated

const server = http.createServer((req, res) => {
    
    const {headers, url, method, statusCode} = req;
    console.log(headers, url, method, statusCode);
    res.end();

});







//TODO: Listening port on the server
server.listen(port, () =>
    console.log(`Server is Listening on port No. ${port}`));



