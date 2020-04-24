const { Mo } = require('mongodb');

function person_repo() {

    // declare the uri and database names
    const uri = 'mongodb://localhost:27017';
    const db_name = 'circulation';


    function loadData(data) {


        return new Promise((resolve, reject) => {
            const client = new MongoClient(uri);
             try {

                await client.connect();
                const db = client.db(db_name);



             } catch(error){
                 reject(error);
             }
        });

    }
    return { loadData };

}

module.exports = person_repo();