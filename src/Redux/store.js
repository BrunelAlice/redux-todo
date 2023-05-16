import { configureStore } from '@reduxjs/toolkit';
import todoSlice from "./todos";

    // Store set up with all reducers
const store = configureStore({
    reducer: {
        todos: todoSlice
    },
});

export default store;