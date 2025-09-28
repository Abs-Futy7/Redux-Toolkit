import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


const initialState = {
    posts: [],
    isLoading: false,
    isError: false,
    error: ''
}


export const fetchPosts = createAsyncThunk('posts/fetchPosts', async()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    return data;
})

const postSlice = createSlice({
    name: 'posts',
    initialState,
    extraReducers: (builder)=>{
        builder.addCase(fetchPosts.pending, (state)=>{
            state.isLoading = true;
            state.isError = false;
            state.error = '';
        })
        .addCase(fetchPosts.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.posts = action.payload;
        })
        .addCase(fetchPosts.rejected, (state, action)=>{
            state.isLoading = false;
            state.isError = true;
            state.error = action.error.message;
        });
    }
})


export default postSlice.reducer