import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './AddBlogForm.module.css';
import { useAddBlogMutation } from '../store/features/blogs-api';

const AddBlogForm = ({ onSubmit, isError }) => {
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const router = useRouter()

  const [addBlog, { isLoading }] = useAddBlogMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (author && title && body) {
      const newBlogPost = {
        author,
        title,
        body,
      };
      await addBlog(newBlogPost);

      setAuthor('');
      setTitle('');
      setBody('');
      router.push('/')
    }
  };

  return (
    <div className={styles.add_blog_form}>
      <h2 className={styles.title}>Add New Blog Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className={styles.input}
        />
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={styles.input}
        />
        <textarea
          placeholder="Content"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className={styles.textarea}
        />
        <button type="submit" className={styles.button} disabled={isLoading}>
          {isLoading ? 'Adding...' : 'Add Post'}
        </button>
        {isError && <p className={styles.error}>Error adding blog post</p>}
      </form>
    </div>
  );
};

export default AddBlogForm;

