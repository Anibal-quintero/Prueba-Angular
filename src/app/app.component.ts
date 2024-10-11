import { Component, OnInit } from '@angular/core';
import { TaskService } from './task.service';
import { Tasks } from 'src/interface/tasks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  tasks: Tasks[] = []
  formVisibility = false

  constructor(private tasksService: TaskService) { }

  ngOnInit(): void {
    this.tasks = this.tasksService.tasks
  }

  receiveStatus($event: any) {
    this.formVisibility = $event
  }

  onselected(selectValue: string) {
    if (selectValue === "completed") {
      this.tasks = this.tasksService.tasks.filter((task) => task.completed === true)
    } else if (selectValue === "incomplete") {
      this.tasks = this.tasksService.tasks.filter((task) => task.completed === false)
    }
    else {
      this.tasks = this.tasksService.tasks
    }
  }

}
