import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "First Task",
    description: "This is the first task",
    completed: false,
  },
  {
    id: "2",
    title: "Second Task",
    description: "This is the second task",
    completed: false,
  },
  {
    id: "3",
    title: "Third Task",
    description: "This is the third task",
    completed: false,
  },
];
const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    updateTask: (state, action) => {
      const {id, title, description} = action.payload;
      const foundTask = state.find(task => task.id === id)
      foundTask.title = title;
      foundTask.description = description;
    },
    deleteTask: (state, action) => {
      const taskFounded = state.find((task) => task.id === action.payload);
      if (taskFounded) state.splice(state.indexOf(taskFounded), 1);
    },
  },
});

export const { addTask, deleteTask, updateTask } = taskSlice.actions;
export default taskSlice.reducer;
