const { MongoClient } = require('mongodb');

const uri = "mongodb://localhost:27017/bookstore";

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db();
    const books = database.collection("books");

    // Specify the document field to find distinct values for
    const fieldName = "genres";

    // Specify an optional query document to narrow results
    const query = { author: "Henryk Sienkiewicz" };

    const distinctValues = await books.distinct(fieldName, query);

    console.log(distinctValues);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
