const { MongoClient } = require ('mongodb');

const uri = "mongodb://localhost:27017/bookstore";

const client = new MongoClient(uri);

async function run() {
  try {
    
    // Get the database and collection on which to run the operation
    const database = client.db();
    const books = database.collection("books");

    const query = { title: "Dune" };

    const book = await books.findOne(query);
    console.log(book);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
