import connectDB from '../../utils/dbConnect';
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
  if (req.method === 'PUT') {
    try {
      const db = await connectDB();
      const { id, author, title, body, createdAt } = req.body;
      const post = {
        author,
        title,
        body,
        createdAt,
      };
      await db.collection('posts').updateOne(
        { _id: ObjectId(id) },
        { $set: post }
      );
      res.status(200).json({ message: 'Post updated successfully' });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while updating the post' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
