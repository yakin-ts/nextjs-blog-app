import { connectDB, closeDB } from '../../utils/dbConnection';
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {   
    if (req.method === 'DELETE') {
        try {
        const { id } = req.body;
        
        const db = await connectDB();
        
        await db.collection('blogPost').deleteOne(
            { _id: new ObjectId(id) }
        );
        
        console.log('Deleted post:', id);
        res.status(200).json({ message: 'Post deleted successfully' });
        } catch (error) {
        console.error('Error occurred while deleting:', error);
        res.status(500).json({ error: 'An error occurred while deleting the post' });
        } finally {
        // Always remember to close the connection when you're done
        // await closeDB();
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
    }

// Compare this snippet from pages/api/get-posts.js: