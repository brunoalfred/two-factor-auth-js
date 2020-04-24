const MongoClient = require('mongodb').MongoClient;


// importing the useful files
const person_repo = require('./repositories/person_repo');
const data = require('./person.json');




// declare the uri and database names
const uri = 'mongodb://localhost:27017';
const db_name = 'circulation';










async function main() {
    const client = new MongoClient(uri);
    await client.connect();



    const results = await person_repo.loadData(data);
    console.log(results.insertedCount);
    

    // * connect to the database
    const admin = client.db(db_name).admin();

    console.log(await admin.serverStatus());
    // console.log(await admin.listDatabases());


}

main();