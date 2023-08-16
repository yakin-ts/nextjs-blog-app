import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useUpdateBlogMutation, useGetBlogsQuery } from '../../store/features/blogs-api'; // Import the generated RTK Query hooks
import EditBlogForm from '../../components/EditBlogForm';

const EditBlogPage = () => {
  const router = useRouter();
  const { id } = router.query;

  // Use the generated query hooks to fetch data and update a blog post
  const { data: blogPosts } = useGetBlogsQuery();
  const [updateBlog] = useUpdateBlogMutation();

  const selectedBlog = blogPosts?.find((blog) => blog._id === id);

  const [formData, setFormData] = useState({
    author: '',
    title: '',
    body: '',
  });

  useEffect(() => {
    if (selectedBlog) {
      setFormData({
        id: selectedBlog._id,
        author: selectedBlog.author,
        title: selectedBlog.title,
        body: selectedBlog.body,
      });
    }
  }, [id, selectedBlog]);

  const handleEditBlog = async (e) => {
    e.preventDefault();

    try {
      const { id, ...updatedData } = formData;
      const response = await updateBlog(updatedData); // Use the updateBlog mutation

      if (response.data) {
        console.log('Blog was updated');
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
        onEdit={(e) => handleEditBlog(e)}
      />
    </div>
  );
};

export default EditBlogPage;
