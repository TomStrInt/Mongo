const { MongoClient } = require('mongodb');

const uri = "mongodb://localhost:27017/bookstore";

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db();
    const books = database.collection("books");

    const query = { title: "Pani Bovary" };
    const result = await books.deleteOne(query);


    if (result.deletedCount === 1) {
      console.log("Successfully deleted one document.");
    } else {
      console.log("No documents matched the query. Deleted 0 documents.");
    }
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
