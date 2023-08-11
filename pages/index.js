import React, { useEffect } from 'react';
import Link from 'next/link'; // Import the Link component
import { useBlogContext } from '../contexts/BlogContext';
import styles from '../styles/home.module.css';

const Home = () => {
  // Access the state and dispatch function from the BlogContext
  const { state, dispatch } = useBlogContext();

  // Fetch and set the blog posts when the component mounts
  useEffect(() => {
    async function fetchPosts() {
      try {
        // Fetch blog posts data from the API
        const response = await fetch('/api/get-posts');
        console.log('API response:', response);
        const data = await response.json();

        // Update the state with fetched blog posts
        dispatch({ type: 'SET_BLOG_POSTS', payload: data });
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      }
    }

    fetchPosts();
  }, [dispatch]); // Run this effect only when dispatch changes

  console.log('Current state:', state);

  return (
    <div className={styles.blog_posts}>
      <h1 className={styles.blog_posts_title}>Blog Posts</h1>
      {/* Loop through each blog post and create a link */}
      {state && state.blogPosts.map((blog) => (
        <div key={blog.id} className={styles.blog_post}>
          {/* Create a link to the individual blog post */}
          <Link href={`/${blog._id}`}>
            <a className={styles.blog_post_link}>
              <h2 className={styles.blog_post_title}>{blog.title}</h2>
              <p className={styles.blog_post_author}>{blog.author}</p>
              <p className={styles.blog_post_date}>{blog.createdAt}</p>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
