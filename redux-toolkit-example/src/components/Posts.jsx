import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../features/counter/postSlice';

function Posts() {
    const posts = useSelector((state) => state.posts); // Access posts from Redux state
    const dispatch = useDispatch();

    useEffect(()=>{
        // Dispatch an action to fetch posts when the component mounts
        dispatch(fetchPosts());
    }, [dispatch]);

    return (
        <div>
            Posts Component
            {posts.isLoading && <p>Loading...</p>}
            {posts.isError && <p>Error: {posts.error}</p>}
            <ul>
                {posts.posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default Posts
