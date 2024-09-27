import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TaskService } from '../Task.service';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent {

  taskForm: FormGroup;

  constructor(private fb: FormBuilder, private taskService: TaskService) {
    this.taskForm = this.fb.group({
      name: [''],
      dueDate: [''],
      people: this.fb.array([])
    });
  }

  onSubmit(): void {
    console.log(this.taskForm)
    if (this.taskForm.valid) {
      const newTask = this.taskForm.value;
      this.taskService.addTask(newTask);
      this.taskForm.reset();
    }
  }
}
