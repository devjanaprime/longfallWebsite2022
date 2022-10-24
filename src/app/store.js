import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counterSlice';
import preferencesReducer from '../features/preferencesSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        preferences: preferencesReducer
    }
})