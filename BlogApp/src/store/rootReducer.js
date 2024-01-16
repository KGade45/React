// rootReducer.js
import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './authSlice';

const rootReducer = combineReducers({
    auth: authReducer, // This is where you specify the key under which the authReducer is combined
    // Add other reducers here if you have more
});

export default rootReducer;
