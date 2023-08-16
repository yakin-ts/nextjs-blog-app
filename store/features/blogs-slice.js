import {createSlice} from '@reduxjs/toolkit';

const initialState = []

const blogsSlice = createSlice({    
    name: 'blogs',
    initialState,
    reducers: {
        addBlog:(state, action) => {
            state.push(action.payload)
        },

        removeBlog:(state, action) => {
            return state.filter(blog => blog.id !== action.payload.id)
        },
        getBlogs:(state, action) => {
            return action.payload
        },
        deleteBlog:(state, action) => {
            return state.filter(blog => blog.id !== action.payload.id)
        }
    }
});

export const {addBlog, removeBlog, getBlogs, deleteBlog} = blogsSlice.actions;