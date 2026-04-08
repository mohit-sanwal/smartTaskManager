import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class TaskService {
    private tasks = ['Learn Angular', 'Build Project'];

    getTasks(): Observable<string[]> {
        return of(this.tasks);
    }

    addTask(task:string) : Observable<string[]> {
        this.tasks.push(task);
        return of(this.tasks);
    }
}
