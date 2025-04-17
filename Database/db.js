const { MongoClient } = require('mongodb');

const url = "mongodb+srv://happiness:password1234@cluster0.69qyx.mongodb.net/";

const client = new MongoClient(url);

const dbname = "MyApi";

async function main(){
    await client.connect();
    console.log("Connection Successfully Established!");
    const db = client.db(dbname);
    return db;
}

module.exports = { main };