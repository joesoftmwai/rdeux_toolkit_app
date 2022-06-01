import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import goalReducer from './auth/goalSlice';

export const store = configureStore({
  reducer: {
      auth: authReducer,
      goal: goalReducer
  },
});
