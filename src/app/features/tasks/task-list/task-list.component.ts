import { CommonModule } from '@angular/common';
import { Component, OnInit, ChangeDetectionStrategy, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Task } from '../../../store/models/task.model';
import { loadTasks, addTask, deleteTask, toggleTask } from '../../../store/actions/task.actions';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskListComponent implements OnInit {

  tasks$!: Observable<Task[]>;

  private store = inject(Store<{ tasks: { tasks: Task[] } }>);

  ngOnInit() {
    // 🔥 store se data lena
    this.tasks$ = this.store.select(state => state.tasks.tasks);

    // console.log('this.tasks$', this.tasks$);

    // 🔥 load action dispatch
    this.store.dispatch(loadTasks());
  }

  addTask(input: HTMLInputElement) {
    const value = input.value.trim();

    if (value) {
      this.store.dispatch(addTask({ title: value }));
      input.value = '';
    }
  }

  deleteTask(id: number) {
   this.store.dispatch(deleteTask({ id }));
  }

  toggleTask(id: number) {
    this.store.dispatch(toggleTask({ id }));
  }
}