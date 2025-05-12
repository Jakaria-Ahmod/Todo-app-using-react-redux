import { createSlice } from '@reduxjs/toolkit';

export const Todoslice = createSlice({
  name: 'Todo',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({
        id: Date.now(),
        text: action.payload,
        complete: false,
      });
    },
    removeItem: (state, action) => {
      return state.filter(todo => todo.id !== action.payload);
    },
  },
});

export const { addTodo, removeItem } = Todoslice.actions;
export default Todoslice.reducer;
