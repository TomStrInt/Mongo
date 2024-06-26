const { MongoClient } = require('mongodb');

const uri = "mongodb://localhost:27017/bookstore";


const client = new MongoClient(uri);

async function run() {
  try {
    
    const database = client.db();
    const books = database.collection("books");
    
  
    const doc = {
      title: "Pani Bovary",
      author: "Gustave Flaubert",
      genres: "naturalizm",
      rating: 7
    }
    
    const result = await books.insertOne(doc);

    console.log(`A document was inserted with the _id: ${result.insertedId}`);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
