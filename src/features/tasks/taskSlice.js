import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", title: "Task 1", desc: "Task 1 Description", completed: false },
  { id: "2", title: "Task 2", desc: "Task 2 Description", completed: false },
];

export const taskSlice = createSlice({
  name: "tasks",
  initialState: initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    editTask: (state, action) => {
      const { id, title, desc } = action.payload;
      const foundTask = state.find((task) => task.id === id);
      if (foundTask) {
        foundTask.title = title;
        foundTask.desc = desc;
      }
    },
    deleteTask: (state, action) => {
      const taskFound = state.find((task) => task.id === action.payload);
      if (taskFound) {
        state.splice(state.indexOf(taskFound), 1);
      }
    },
  },
});

// export the reducer
export default taskSlice.reducer;
// export reducer actions
export const { addTask, editTask, deleteTask } = taskSlice.actions;
