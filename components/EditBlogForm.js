import React from 'react';
import { useRouter } from 'next/router';
import { useEditBlogMutation, useGetBlogsQuery } from '../store/features/blogs-api';
import styles from './EditBlogForm.module.css';

const EditBlogForm = ({ formData, setFormData }) => {
    const [editBlog, error, isLoading ] = useEditBlogMutation();
    const router = useRouter();
    const { queryClient } = useGetBlogsQuery;

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const updatedBlogPost = await editBlog(formData);

            if (updatedBlogPost) {
                router.push('/');
            }
        } catch (error) {
            console.error('Error updating blog post', error);
        }
    };

    if (isLoading) {
        return <h1>Updating....</h1>;
    }

    return (
        <div className={styles.edit_blog_form}>
            <h2 className={styles.title}>Edit Blog Post</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="author"
                    value={formData.author}
                    onChange={handleInputChange}
                    className={styles.input}
                />
                <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    className={styles.input}
                />
                <textarea
                    name="body"
                    value={formData.body}
                    onChange={handleInputChange}
                    className={styles.textarea}
                />
                <button type="submit" className={styles.button} disabled={isLoading}>
                    {isLoading ? 'Updating...' : 'Update Post'}
                </button>
            </form>
        </div>
    );
};

export default EditBlogForm;
