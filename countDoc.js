
const { MongoClient } = require('mongodb');

const uri = "mongodb://localhost:27017/bookstore";


const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db();
    const books = database.collection("books");


    const estimate = await books.estimatedDocumentCount();
    console.log(`Estimated number of documents in the books collection: ${estimate}`);


    const query = { author: "Henryk Sienkiewicz" };
    const countAuthor = await books.countDocuments(query);
    console.log(`Number of books by Henryk Sienkiewicz: ${countAuthor}`);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
