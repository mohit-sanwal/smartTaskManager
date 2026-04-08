import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit {

    tasks: string[] = [];

    private taskService = inject(TaskService);

    ngOnInit(){
      this.taskService.getTasks().subscribe(data => {
        this.tasks = data;
      })
    }

    addTask(input: HTMLInputElement) {
      const value = input.value.trim();
      if(value) {
        this.taskService.addTask(value).subscribe(data=> {
          this.tasks = data;
          input.value = '';
        });
      }
    }
}
