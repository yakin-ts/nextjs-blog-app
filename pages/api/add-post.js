import {connectDB, closeDB} from '../../utils/dbConnection';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const db = await connectDB();
      console.log('DB connected add post')
      const { author, title, body} = req.body;
      // const date = Date.now();
      const newPost = {
        author,
        title,
        body,
        createdAt: new Date(),
      };
      console.log('before inserting blg');
      await db.collection('blogPost').insertOne(newPost);
      console.log('successfully added a blog');
      res.status(201).json({ message: 'Post added successfully' });
      
    } catch (error) {
        console.log(error)
      res.status(500).json({ error: 'An error occurred while adding the post' });
    }
   finally {
    // Always remember to close the connection when you're done
    // await closeDB();
  }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
