
import React, { useState } from "react";
import styles from './AddBlogForm.module.css';

const AddBlogForm = ({ onSubmit }) => {
    const [author, setAuthor] = useState("");
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (author && title && body) {
            const newBlogPost = {
                author,
                title,
                body,
                // Other properties like createdAt, etc.
            };
            onSubmit(newBlogPost); // Call the passed onSubmit function
            setAuthor("");
            setTitle("");
            setBody("");
        }
    };

    return (
        <div className={styles.add_blog_form}>
            <h2 className={styles.title}>Add New Blog Post</h2>
            <form method="POST" onSubmit={handleSubmit}>
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
                <button type="submit" className={styles.button} >Add Post</button>
            </form>
        </div>
    );
}

export default AddBlogForm;
