
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Task } from './../Task';

const httpOpentions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class GetTaskService {
  private apiUrl: string = 'http://localhost:3200/tasks';
  constructor(private HttpClient: HttpClient) { }


  getTask(): Observable<Task[]> {
    return this.HttpClient.get<Task[]>(this.apiUrl);
  }
  deleteTask(task: Task): Observable<Task> {
    return this.HttpClient.delete<Task>(`${this.apiUrl}/${task.id}`);
  }
  toggleTaskReminder(task: Task): Observable<Task> {
    return this.HttpClient.put<Task>(`${this.apiUrl}/${task.id}`, task, httpOpentions);
  }

}
