import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const blogsApi = createApi({
    reducerPath: 'blogsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
    endpoints: (builder) => ({
        getBlogs: builder.query({
            query: () => '/api/get-posts',
        }),
        addBlog: builder.mutation({
            query: (blog) => ({
                url: '/api/add-post',
                method: 'POST',
                body: blog,
            }),
        }),
        deleteBlog: builder.mutation({
            query: (blog) => ({
                url: `/api/delete-post`,
                method: 'DELETE',
            }),

        }),
        editBlog: builder.mutation({    
            query: (blog) => ({
                url: `/api/edit-post/`,
                method: 'PUT',
                body: blog,
            }),
        }),
    }),
    
});

export const { useGetBlogsQuery, useAddBlogMutation, useDeleteBlogMutation, useEditBlogMutation } = blogsApi;
