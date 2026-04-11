import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { title } from "process";
import { Observable, of } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class TaskService {
    private http = inject(HttpClient);

    private apiUrl =  'https://jsonplaceholder.typicode.com/todos'
    private tasks = ['Learn Angular', 'Build Project'];

    getTasks(): Observable<any[]> {
        return this.http.get<any[]>(this.apiUrl);
    }

    addTask(task:string): Observable<any> {
        return this.http.post(this.apiUrl, {
            title: task,
            completed: false
        });
    }

    deleteTask(id: number) {
        return this.http.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
    }

}