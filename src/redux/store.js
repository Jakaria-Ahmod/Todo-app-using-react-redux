import { configureStore } from '@reduxjs/toolkit';
import Todoslice from './featurs/Todo/todoSlice';

const sotre = configureStore({
  reducer: {
    Todo: Todoslice,
  },
});

export default sotre;
