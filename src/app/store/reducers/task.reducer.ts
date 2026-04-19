// reducers/task.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { Task } from '../models/task.model';
import { loadTasksSuccess, addTaskSuccess, deleteTaskSuccess, toggleTaskSuccess } from '../actions/task.actions';

export interface TaskState {
  tasks: Task[];
}

export const initialState: TaskState = {
  tasks: []
};

export const taskReducer = createReducer(
  initialState,

  on(loadTasksSuccess, (state, { tasks }) => ({
    ...state,
    tasks
  })),

  on(addTaskSuccess, (state, { task }) => {
    console.log('Reducer updating state:', task, state);
    return ({
        ...state,
        tasks: [task, ...state.tasks]
    })
  }),

  on(deleteTaskSuccess, (state, { id }) => ({
    ...state,
    tasks: state.tasks.filter(task => task.id !== id)
    })
  ),

  on(toggleTaskSuccess, (state, { id }) => ({
  ...state,
  tasks: state.tasks.map(task =>
    task.id === id
      ? { ...task, completed: !task.completed }
      : task
  )
}))
  
);