import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    {
        id: 1,
        value: 0,
    },
    {
        id: 2,
        value: 0,
    }
]

export const counterSlice = createSlice({
  name: 'counters', // Changed from 'counter' to 'counters' to reflect multiple counters
  initialState,
  reducers: {
    increment: (state, action) => { // action.payload should contain the id of the counter to increment
      const counterIndex = state.findIndex(c => c.id === action.payload.id); // Find the index of the counter with the given id
      state[counterIndex].value++; // Increment the value of the found counter
    },
    decrement: (state, action) => {
        const counterIndex = state.findIndex(c => c.id === action.payload.id);
        state[counterIndex].value--;
    }
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer; // The reducer now manages an array of counters