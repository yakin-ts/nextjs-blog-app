

import React from 'react';
import { useRouter } from 'next/router';
import AddBlogForm from '../components/AddBlogForm';
import { useBlogContext } from '../contexts/BlogContext';


const AddBlogPage = () => {
  const { dispatch } = useBlogContext(); // Access the dispatch function from the context

  const router = useRouter()

  const handleAddBlog = (newBlogPost) => {
    // Dispatch an action to add the new blog post to the context state
    dispatch({ type: 'ADD_BLOG_POST', payload: newBlogPost });
  };


 
  const handleSubmit = async (formData) => {
    // event.preventDefault();
    console.log(formData)
    try {
      const response = await fetch('/api/add-post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      console.log(response)


      if (response.ok) {
        const newBlogPost = await response.json();

        handleAddBlog(newBlogPost); // Call the handleAddBlog function 
        router.push('/')
        
      } else {
        console.error('Error adding blog post');
      }
    } catch (error) {
      console.error('Error adding blog post', error);
    }
  };

  return (
   <AddBlogForm onSubmit={handleSubmit} />
  );
};

export default AddBlogPage;

