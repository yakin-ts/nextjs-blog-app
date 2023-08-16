import React from 'react';
import { useGetBlogsQuery } from '../store/features/blogs-api.js'; // Import the generated query hook
import Link from 'next/link';
import styles from '../styles/home.module.css';

const Home = () => {
  // Use the generated query hook to fetch data
  const { data: blogPosts = [], error, isLoading } = useGetBlogsQuery();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching blog posts: {error.message}</p>;
  }

  return (
    <div className={styles.blog_posts}>
      <h1 className={styles.blog_posts_title}>Blog Posts</h1>
      {blogPosts.map((blog) => (
        <div key={blog.id} className={styles.blog_post}>
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
