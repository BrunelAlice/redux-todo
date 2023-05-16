import { createSlice } from '@reduxjs/toolkit';

// Define and export slice with reducers
export const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        nextId: 2,
        data: {
            1: {
                content: 'content 1',
                completed: false
            }
        }
    },
    reducers: {
        // Reducer add a todo to the initial state
        addTodo: (state, action) =>
        {
            // Use current next id as new object id
            let id = state.nextId;
            // Takes previous data and add a new object
            state.data = {
                ...state.data,
                [id]: {
                    content: action.payload,
                    completed: false
                }
            };
            // Increment current next id
            state.nextId++;
        },

        // Reducer delete from the state object
        deleteTodo: (state, action) =>
        {
            delete state.data[action.payload];
        },

        // Reducer to change the state object completed to true
        markTodo: (state, action) =>
        {
            state.data[action.payload.id].completed = action.payload.marked;
        },

        // Reducer to edit the content of todo
        editTodo: (state, action) =>
        {
            const editContent = prompt("Enter new content");
            state.data[action.payload].content = editContent;
        },
    },
});

// Action creators are generated for each case reducer function
export const { addTodo, deleteTodo, markTodo, editTodo } = todoSlice.actions;

export default todoSlice.reducer;