import React, { createContext, useReducer, useContext, useEffect } from 'react';

const BlogContext = createContext();

const initialState = {
  blogPosts: [],
};

function blogReducer(state, action) {
  switch (action.type) {
    case 'SET_BLOG_POSTS':
      return { ...state, blogPosts: action.payload };
    case 'ADD_BLOG_POST':
      {console.log('In the reducer', action.payload)
      return { ...state, blogPosts: [...state.blogPosts, action.payload] };}
    case 'UPDATE_BLOG_POST':
      const updatedBlogPosts = state.blogPosts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
      return { ...state, blogPosts: updatedBlogPosts };
    default:
      return state;
  }
}

function BlogProvider({ children }) {
  const [state, dispatch] = useReducer(blogReducer, initialState);

  return (
    <BlogContext.Provider value={{ state, dispatch }}>
      {children}
    </BlogContext.Provider>
  );
}

function useBlogContext() {
  const context = useContext(BlogContext);
  if (context === undefined) {
    throw new Error('useBlogContext must be used within a BlogProvider');
  }
  return context;
}

export { BlogProvider, useBlogContext };
