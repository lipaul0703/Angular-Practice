import { filter } from 'rxjs';
import { Task } from './../../Task';
import { GetTaskService } from './../../service/get-task.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  constructor(private GetTaskService: GetTaskService) { }

  ngOnInit(): void {
    this.GetTaskService.getTask().subscribe((t) => this.tasks = t);
  }
  deleteTask(task: Task) {
    this.GetTaskService.deleteTask(task).
      subscribe(() => this.tasks = this.tasks.
        filter((t) => t.id !== task.id))
  }
  toggleTaskReminder(task: Task) {
    task.reminder = !task.reminder;
    this.GetTaskService.toggleTaskReminder(task).subscribe();

  }
}
