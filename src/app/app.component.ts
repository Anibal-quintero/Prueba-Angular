import { Component, OnInit } from '@angular/core';
import { TaskService } from './Task.service';
import { Task } from './interface/interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'prueba-angular';
  hiddenForm = true
  tasks: Task[] = [];
  filteredTasks: Task[] = [];


  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
    this.filteredTasks = [...this.tasks];
  }

  showForm() {
    this.hiddenForm = !this.hiddenForm
  }

  onFormClose(event: boolean) {
    this.hiddenForm = event;
  }

  taskFilter(event: Event): void {
    const selectedValue = (event.target as HTMLSelectElement).value;

    if (selectedValue === 'all') {
      this.filteredTasks = [...this.tasks];
    } else {
      const isCompleted = selectedValue === 'true';
      this.filteredTasks = this.tasks.filter(task => task.isCompleted === isCompleted);
    }
  }

}
