import React from 'react';
import { useSelector } from 'react-redux';
import { useGetBlogsQuery } from '../store/features/blogs-api'; // Import useSelector from Redux Toolkit
import { useRouter } from 'next/router';
import Blog from '../components/Blog';
import styles from '../styles/home.module.css';

const BlogPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  // Use useSelector to get the blogPosts from the Redux state
  const { data: blogPosts = [], error, isLoading } = useGetBlogsQuery(); // Access the 'blogs' reducer slice
  console.log(blogPosts);

  // Find the blog post with the matching ID in the state
  const selectedBlog = blogPosts.find((blog) => blog._id === slug);

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
