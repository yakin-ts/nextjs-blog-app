import React from "react";
import styles from './Blog.module.css'; // Import your CSS module

const Blog = ({ blogData }) => {
    return (
        <div className={styles.blog}>
            <h2 className={styles.title}>{blogData.title}</h2>
            <p className={styles.body}>{blogData.body}</p>
            <div className={styles.author}>Author: {blogData.author}</div>
            <div className={styles.createdAt}>Created At: {blogData.CreatedAt}</div>
        </div>
    );
}

export default Blog;
