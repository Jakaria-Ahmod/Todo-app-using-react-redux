import { configureStore } from '@reduxjs/toolkit';
import todoslice from './featurs/Todo/todoSlice';

const sotre = configureStore({
  reducer: {
    todo: todoslice,
  },
  // middleware: getDefaultMiddleware => getDefaultMiddleware().concat(thunk),
});

export default sotre;
