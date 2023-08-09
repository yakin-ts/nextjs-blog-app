import connectDB from '../../utils/dbConnect';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const db = await connectDB();
      const { author, title, body, createdAt } = req.body;
      const newPost = {
        author,
        title,
        body,
        createdAt,
      };
      await db.collection('blogPost').insertOne(newPost);
      res.status(201).json({ message: 'Post added successfully' });
      
    } catch (error) {
        console.log(error)
      res.status(500).json({ error: 'An error occurred while adding the post' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
