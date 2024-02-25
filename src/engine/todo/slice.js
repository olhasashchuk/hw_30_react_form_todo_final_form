import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice ({
    name: 'todo',
    initialState: {
        items: [],
    },
    reducers: {
        setItems: (state, action) => {
            state.items = action.payload;
        },
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        deleteItem: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
    }
})

export default todoSlice