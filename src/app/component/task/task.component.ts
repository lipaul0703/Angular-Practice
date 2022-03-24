import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/Task';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() taskItem !: Task;
  @Output() deleteTaskEmit = new EventEmitter;
  constructor() { }

  ngOnInit(): void {
  }
  deleteTaskBtn(taskItem: Task) {
    this.deleteTaskEmit.emit();
  }
}
