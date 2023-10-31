import { configureStore } from '@reduxjs/toolkit';
import { TasksSlice } from './tasksSlice';
import { HumanSlice } from './humanSlice';

export const store = configureStore({
  reducer: {
    tasks: TasksSlice.reducer,
    humans: HumanSlice.reducer
  }
});

// import { createStore } from 'redux';

// export const store = createStore(
//   (state = { humans: [], tasks: [] }, action) => state
// );
