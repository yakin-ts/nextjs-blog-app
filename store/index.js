import {configureStore} from '@reduxjs/toolkit';
import {blogsApi} from './features/blogs-api';
import blogsReducer from './features/blogs-slice';

const store =  configureStore({
    reducer: {
        blogs: blogsReducer,
        [blogsApi.reducerPath]: blogsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(blogsApi.middleware),
});

export default store;