const{mongoClient, objectId} = require ('mongodb');
const url = 'mongodb://localhost:27017';
const client =new mongoClient(url);
const dbName = 'myDatabase';

async function createDocument(collectionName, document) {
    try {
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        const result = await collection.insertOne(document);
        console.log('Document inserted with _id: ', result.insertedId);
    }
async function readDocuments(collectionName, query) {
    try {
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        const documents = await collection.find(query).toArray();
        console.log('Documents found: ', documents);
    }
    async Function getstudent(){
        
    }
