const MongoClient = require('mongodb').MongoClient;

// declare the uri and database names
const uri = 'mongodb://localhost:27017';
const db_name = 'circulation';

function main() {
    const client = new MongoClient(uri);
    await client.connect();
}

main();