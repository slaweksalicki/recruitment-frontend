import { createSlice } from "@reduxjs/toolkit";

const tasksListSlice = createSlice({
  name: "tasksList",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.unshift({
        id: action.payload.id,
        text: action.payload.text,
        done: false,
        dateDone: null,
      });
    },
    completeTask: (state, action) => {
      const task = state.find((task) => task.id === action.payload);
      if (task) {
        task.done = !task.done;
        task.dateDone = task.done ? new Date().toISOString() : null;
      }
    },
    deleteTask: (state, action) => {
      return state.filter((task) => task.id !== action.payload);
    },
  },
});

export const { addTask, completeTask, deleteTask } = tasksListSlice.actions;
export default tasksListSlice.reducer;
