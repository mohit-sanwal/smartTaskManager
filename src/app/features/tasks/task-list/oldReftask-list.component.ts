// import { CommonModule } from '@angular/common';
// import { Component, OnInit, inject, ChangeDetectionStrategy  } from '@angular/core';
// import { TaskService } from '../task.service';
// import { BehaviorSubject } from 'rxjs';

// interface Task {
//   id: number;
//   title: string;
//   completed: boolean;
// }

// @Component({
//   selector: 'app-task-list',
//   changeDetection: ChangeDetectionStrategy.OnPush,
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './task-list.component.html',
//   styleUrl: './task-list.component.css'
// })

// export class TaskListComponent implements OnInit {
  


//     tasks$ = new BehaviorSubject<Task[]>([]);

//     private taskService = inject(TaskService);

//     ngOnInit(){
//       this.taskService.getTasks().subscribe(data => {
//         this.tasks$.next(data);
//       })
//     }

//     addTask(input: HTMLInputElement) {
//       const value = input.value.trim();
//       if(value) {
//         this.taskService.addTask(value).subscribe(data=> {
//           this.tasks$.next([data, ...this.tasks$.value]);
//           input.value = '';
//         });
//       }
//     }
// }
