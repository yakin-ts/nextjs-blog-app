import { connectDB, closeDB } from '../../utils/dbConnection';
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
  if (req.method === 'PUT') {
    try {
      const { id, author, title, body } = req.body;
      
      const db = await connectDB();
      
      const updatedFields = {};
      if (author) updatedFields.author = author;
      if (title) updatedFields.title = title;
      if (body) updatedFields.body = body;
      
      if (Object.keys(updatedFields).length === 0) {
        return res.status(400).json({ error: 'No update data provided' });
      }
      
      await db.collection('blogPost').updateOne(
        { _id: new ObjectId(id) },
        { $set: updatedFields }
      );
      
      console.log('Updated post:', id);
      res.status(200).json({ message: 'Post updated successfully' });
    } catch (error) {
      console.error('Error occurred while updating:', error);
      res.status(500).json({ error: 'An error occurred while updating the post' });
    } finally {
      // Always remember to close the connection when you're done
      // await closeDB();
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
