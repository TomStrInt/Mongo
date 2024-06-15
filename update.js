const { MongoClient } = require('mongodb');

const uri = "mongodb://localhost:27017/bookstore";

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db();
    const books = database.collection("books");

    const filter = { title: "Dune" };

    const options = { upsert: true };

    const updateDoc = {
      $set: {
        reviews: "Great book I like it"
      },
    };

    const result = await books.updateOne(filter, updateDoc, options);
  
    console.log(
      `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`,
    );
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
