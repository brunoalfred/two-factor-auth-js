// Using the core node module to learn the Request /= Response circle
const http = require('http');
const port = process.env.port || 5000;


// * Sample Data 
const todos = [
    { id: 1, text: 'Todo One' },
    { id: 2, text: 'Todo Two' },
    { id: 3, text: 'Todo Three' }]





// ? The server is initiated

const server = http.createServer((req, res) => {

    console.log(req.headers.authorization)
    res.writeHead(404,
        'Not Available',
        {
            'Content-Type': 'application/json',
            'X-Powered-By': 'Node.js'
        });


    res.end(JSON.stringify({ success: false, data: null }))
});



//TODO: Listening port on the server
server.listen(port, () =>
    console.log(`Server is Listening on port No. ${port}`));



