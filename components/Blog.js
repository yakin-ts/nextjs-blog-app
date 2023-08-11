import React from "react";
import Link from "next/link";
import styles from "./Blog.module.css"; // Import your CSS module

const Blog = ({ blogData }) => {
  return (
    <div className={styles.blog}>
      <h2 className={styles.title}>{blogData.title}</h2>
      <p className={styles.body}>{blogData.body}</p>
      <div className={styles.blog_metas}>
        <div className={styles.blog_info}>
          <div className={styles.author}>Author: {blogData.author}</div>
          <div className={styles.createdAt}>
            Created At: {blogData.createdAt}
          </div>
        </div>
        <div className={styles.blog_edit_sec}>
          <Link href={`/edit/${blogData._id}`}>
            <a className={styles.editButton}>Edit Blog</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog;
