import { MongoClient } from 'mongodb';

const uri = 'mongodb://localhost:27017/';
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let client;
let db;

export async function connectDB() {
  if (!client) {
    client = new MongoClient(uri, options);
    await client.connect();
    db = client.db('blogger');
    // console.log('Connected to MongoDB', db);
  }
  return db;
}

export async function closeDB() {
  if (client) {
    await client.close();
    console.log('Closed MongoDB connection');
  }
}
