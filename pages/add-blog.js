import React from 'react';
import AddBlogForm from '../components/AddBlogForm';
import { useBlogContext } from '../contexts/BlogContext';

const AddBlogPage = () => {
  const { dispatch } = useBlogContext();

  const handleAddBlog = (newBlogPost) => {
    // Dispatch an action to add the new blog post to the state
    dispatch({ type: 'ADD_BLOG_POST', payload: newBlogPost });
  };

  return (
    <div>
      {/* <h1>Add Blog Post</h1> */}
      <AddBlogForm onAdd={handleAddBlog} />
    </div>
  );
};

export default AddBlogPage;
