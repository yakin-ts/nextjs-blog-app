import React from 'react';
import styles from './EditBlogForm.module.css';

const EditBlogForm = ({ formData, setFormData, onEdit }) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className={styles.edit_blog_form}>
      <h2 className={styles.title}>Edit Blog Post</h2>
      <form   onSubmit={onEdit}>
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
        <button type="submit" className={styles.button}>
          Update Post
        </button>
      </form>
    </div>
  );
};

export default EditBlogForm;
