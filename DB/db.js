import { MongoClient } from 'mongodb';
import { Age } from "../index";

const url = "mongodb://localhost:27017";

const client = new MongoClient(url);

async function run() {

    try {
        const db = client.db("AgeParser");
        const col = db.collection("Parser");
        await col.insertOne(Age.IsOlderThan21());
        await col.insertOne(Age.isYoungerThan21());

    } finally {

        await client.close();
    }
}

run().catch(console.dir);