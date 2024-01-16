// store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer'; // Import the root reducer

const store = configureStore({
    reducer: rootReducer, // Use the combined rootReducer
});

export default store;
