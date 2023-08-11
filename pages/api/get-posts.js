import {connectDB, closeDB} from '../../utils/dbConnection';

export default async function handler(req, res) {
  console.log('DB connected')
  if (req.method === 'GET') {
    try {
      const db = await connectDB();
      const posts = await db.collection('blogPost').find().toArray();
      res.status(200).json(posts);
    } catch (error) {
      console.log('Databse connectivity issue');
      res.status(500).json({ error: 'An error occurred while fetching blog posts' });
    }
    finally {
      // Always remember to close the connection when you're done
      // await closeDB();
    }
  }
   else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
