import React from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import AddBlogForm from '../components/AddBlogForm';
import { useAddBlogMutation } from '../store/features/blogs-api';

const AddBlogPage = () => {
  // const dispatch = useDispatch();
  const router = useRouter();
  const [addBlog] = useAddBlogMutation();

  const handleSubmit = async (formData) => {
    try {
      const result = await addBlog(formData);

      if (result.data) {
        console.log('Blog was added');
        router.push('/');
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
