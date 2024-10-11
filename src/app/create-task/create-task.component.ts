import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent {

  @Output() statusForm = new EventEmitter<boolean>()
  formTask: FormGroup
  taskID!: number;

  constructor(private formBuilder: FormBuilder, private taskService: TaskService) {
    this.formTask = this.formBuilder.group({
      id: [this.generateUniqueId()],
      taskName: ['', Validators.required],
      deadline: ['', Validators.required],
      completed: [false],
      people: [[]]
    })
  }

  sendStatusForm() {
    this.statusForm.emit(false);
  }

  createTask() {
    if (this.formTask.valid) {
      this.taskService.addTask(this.formTask.value);
      this.formTask.reset()
      this.sendStatusForm()
    }
  }

  generateUniqueId(): number {
    return this.taskService.tasks.length > 0
      ? Math.max(...this.taskService.tasks.map(task => task.id)) + 1
      : 1;
  }
}
