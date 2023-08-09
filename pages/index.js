import React,{useEffect} from 'react';
import Link from 'next/link'; // Import the Link component
import { useBlogContext } from '../contexts/BlogContext';
import styles from '../styles/home.module.css';


// export const blogData = [
//   {
//     "id": 1,
//     "author": "John Doe",
//     "CreatedAt": "12-03-2023",
//     "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//     "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
//   },
//   // Add more blog posts if needed
// ];

const Home = () => {
  const { state, dispatch } = useBlogContext();

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch('/api/get-posts');
        console.log('response', response)
        const data = await response.json();
        dispatch({ type: 'SET_BLOG_POSTS', payload: data });
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      }
    }

    fetchPosts();
  }, [dispatch]);

  return (
    <div className={styles.blog_posts}>
      <h1 className={styles.blog_posts_title}>Blog Posts</h1>
      {state && state.blogPosts.map((blog) => (
        <div key={blog.id} className={styles.blog_post}>
          <Link href={`/${blog.id}`}>
            <a className={styles.blog_post_link}>
              <h2 className={styles.blog_post_title}>{blog.title}</h2>
              <p className={styles.blog_post_author}>{blog.author}</p>
              <p className={styles.blog_post_date}>{blog.CreatedAt}</p>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
