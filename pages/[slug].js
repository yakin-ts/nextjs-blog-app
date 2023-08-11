import React from 'react';
import { useRouter } from 'next/router';
import { useBlogContext } from '../contexts/BlogContext'; // Import the BlogContext
import Blog from '../components/Blog';
import styles from '../styles/home.module.css';

const BlogPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  const { state } = useBlogContext(); // Get the blogPosts from the state

  // Find the blog post with the matching ID in the state
  console.log(state)
  const selectedBlog = state.blogPosts.find(
    (blog) => blog._id === slug
  );

  if (!selectedBlog) {
    return <p>Blog post not found.</p>;
  }

  return (
    <div className={styles.blog_post_container}>
      <Blog key={selectedBlog.id} blogData={selectedBlog} />
    </div>
  );
};

export default BlogPage;
