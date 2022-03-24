import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TaskComponent } from './component/task/task.component';
import { TasksComponent } from './component/tasks/tasks.component';
import { AddTaskBtnComponent } from './component/add-task-btn/add-task-btn.component';
import { ToggleTaskBtnComponent } from './component/toggle-task-btn/toggle-task-btn.component';
import { HeaderComponent } from './component/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { DeleteTaskBtnComponent } from './component/delete-task-btn/delete-task-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TasksComponent,
    AddTaskBtnComponent,
    ToggleTaskBtnComponent,
    HeaderComponent,
    DeleteTaskBtnComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
