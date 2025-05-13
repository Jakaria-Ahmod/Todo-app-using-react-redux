import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const featchTodoData = createAsyncThunk('todos/fetchTodos', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await response.json();
  return data;
});

export const Todoslice = createSlice({
  name: 'Todo',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {
    addTodo: (state, action) => {
      state.items.push({
        id: Date.now(),
        text: action.payload,
        complete: false,
      });
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(todo => todo.id !== action.payload);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(featchTodoData.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(featchTodoData.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(featchTodoData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { addTodo, removeItem } = Todoslice.actions;
export default Todoslice.reducer;
