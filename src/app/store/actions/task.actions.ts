import { Task } from '../models/task.model';
import { createAction, props } from '@ngrx/store';

export const loadTasks = createAction('[Task] Load Tasks');
export const loadTasksSuccess = createAction(
  '[Task] Load Tasks Success',
  props<{ tasks: Task[] }>()
);

export const addTask = createAction(
  '[Task] Add Task',
  props<{ title: string }>()
);

export const addTaskSuccess = createAction(
  '[Task] Add Task Success',
  props<{ task: Task }>()
);