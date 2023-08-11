import React, { useState, useEffect } from 'react';
import { useRouter, redirect} from 'next/router';
import EditBlogForm from '../../components/EditBlogForm';
import { useBlogContext } from '../../contexts/BlogContext';

const EditBlogPage = () => {
  const router = useRouter();
  const { state, dispatch } = useBlogContext();
  const { id } = router.query;

  const [formData, setFormData] = useState({
    author: '',
    title: '',
    body: '',
  });
    // console.log(state.blogPosts);
  useEffect(() => {
    const selectedBlog = state.blogPosts.find((blog) => blog._id === id);
    if (selectedBlog) {
      setFormData({
          id:selectedBlog._id,
        author: selectedBlog.author,
        title: selectedBlog.title,
        body: selectedBlog.body,
      });
    }
  }, [id, state.blogPosts]);

  const handleEditBlog = async (e) => {
    // Perform API call or dispatch action to update the blog post
      e.preventDefault();
    try {
      const response = await fetch(`/api/edit-post/`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

        if (response.ok) {
          console.log('blog was updated')
        const updatedBlogPost = await response.json();
        dispatch({ type: 'UPDATE_BLOG_POST', payload: updatedBlogPost });
        router.push('/');
      } else {
        console.error('Error updating blog post');
      }
    } catch (error) {
      console.error('Error updating blog post', error);
    }
  };

  return (
    <div className='edit_blog_page_container'>
     
      <EditBlogForm
        formData={formData}
        setFormData={setFormData}
        onEdit={(e)=>handleEditBlog(e)}
      />
    </div>
  );
};

export default EditBlogPage;
