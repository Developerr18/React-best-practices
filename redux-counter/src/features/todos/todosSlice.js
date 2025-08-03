import { createSlice, nanoid } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    items: [],
  },
  reducers: {
    addTodo: {
      reducer: (state, action) => {
        state.items.push(action.payload);
      },
      prepare: (text) => ({
        payload: {
          id: nanoid(),
          text,
          completed: false,
          createdAt: new Date().toISOString(),
        },
      }),
    },
    toggleTodo: (state, action) => {
      const toggledItem = state.items.find(
        (item) => item.id === action.payload
      );
      if (toggledItem) {
        toggledItem.completed = !toggledItem.completed;
      }
    },
    deleteTodo: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    editTodo: (state, action) => {
      const { id, text } = action.payload;
      const todo = state.items.find((item) => item.id === id);
      if (todo) {
        todo.text = text;
      }
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo, editTodo } = todosSlice.actions;

export default todosSlice.reducer;
