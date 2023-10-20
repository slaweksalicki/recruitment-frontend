import { configureStore } from "@reduxjs/toolkit";
import tasksListReducer from "./reducers/tasksListSlice.js";

export default configureStore({
  reducer: {
    tasksList: tasksListReducer,
  },
});
