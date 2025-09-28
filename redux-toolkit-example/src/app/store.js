import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import postReducer from '../features/counter/postSlice';

export const store = configureStore({
  reducer: {
    counters: counterReducer,
    posts: postReducer, 
  },
});

// to create store we need reducer
// we have only one reducer so far - counterReducer
// we can add more reducers here as our app grows
// the keys of the reducer object will be the keys in the global state
// e.g. state.counters will give us access to the counters state managed by counterReducer
// suppose I had another slice called userSlice managing user state
// I would import userReducer from '../features/user/userSlice' and add it here like
// user: userReducer