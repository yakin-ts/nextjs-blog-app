import connectDB from '../../utils/dbConnection';

export default async function handler(req, res) {
  console.log('DB connected')
  if (req.method === 'GET') {
    try {
      const db = await connectDB();
      console.log('DB connected', db)
      const posts = await db.collection('blogPost').find().toArray();
      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while fetching blog posts' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
