import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../services/todoSlice';

export default configureStore({
  reducer: {
    todos: todoReducer,
  },
});
