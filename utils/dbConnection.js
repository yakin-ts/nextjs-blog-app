import { MongoClient } from 'mongodb';

const uri = 'mongodb+srv://yakin:53Uk8n9VrkjG3kBq@cluster0.ady96.mongodb.net/blogger?retryWrites=true&w=majority';

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let client;
let db;

if (!client) {
  client = new MongoClient(uri, options);
}

export default async function connectDB() {
  if (!client.isConnected()) {
    await client.connect();
  }
  db = client.db('blogger'); 
  console.log('Connected to MongoDB');
  return db;
}
