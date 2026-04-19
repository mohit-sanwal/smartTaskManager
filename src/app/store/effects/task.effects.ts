import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { map, switchMap } from 'rxjs/operators';

import { TaskService } from '../../features/tasks/task.service';

import {
  loadTasks,
  loadTasksSuccess,
  addTask,
  addTaskSuccess,
  deleteTask,
  deleteTaskSuccess,
  toggleTask,
  toggleTaskSuccess
} from '../actions/task.actions';

@Injectable()
export class TaskEffects {
  constructor(
    private actions$: Actions,
    private taskService: TaskService
  ) {}

  loadTasks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTasks),
      switchMap(() =>
        this.taskService.getTasks().pipe(
          map(tasks => loadTasksSuccess({ tasks }))
        )
      )
    )
  );

  addTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addTask),
      switchMap(action =>
        this.taskService.addTask(action.title).pipe(
          map(task => addTaskSuccess({ task }))
        )
      )
    )
  );

  deleteTask$ = createEffect(() =>
  this.actions$.pipe(
    ofType(deleteTask),
    switchMap(action =>
      this.taskService.deleteTask(action.id).pipe(
        map(() => deleteTaskSuccess({ id: action.id }))
      )
    )
  )
 );

 togglzTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(toggleTask),
      switchMap(action =>
        this.taskService.toggleTask(action.id).pipe(
        map(() => toggleTaskSuccess({ id: action.id }))
      )
      )
    )
 )



}