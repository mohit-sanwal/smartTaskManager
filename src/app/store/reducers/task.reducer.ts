// reducers/task.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { Task } from '../models/task.model';
import { loadTasksSuccess, addTaskSuccess } from '../actions/task.actions';

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
})
);