import { Component, Input } from '@angular/core';
import { Task } from '../interface/interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../Task.service';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card-component.html',
  styleUrls: ['./task-card-component.css']
})
export class TaskCardComponent {
  @Input() task!: Task;
  @Input() index!: number;
  showPersonForm = false;
  selectedPersonIndex: number | null = null;
  skillForm: FormGroup;
  personForm: FormGroup;

  constructor(private fb: FormBuilder, private taskService: TaskService) {
    this.personForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(5)]],
      age: ['', [Validators.required, Validators.min(18)]]
    });

    this.skillForm = this.fb.group({
      name: ['', Validators.required]
    });
  }

  addPerson(): void {
    if (this.personForm.valid) {
      const newPerson = {
        ...this.personForm.value,
        skills: []
      };
      this.task.people.push(newPerson);
      this.personForm.reset();
      this.showPersonForm = false;
    }
  }

  showSkillForm(index: number): void {
    this.selectedPersonIndex = index; 
  }

  taskComplete(taskName: string) {
    this.taskService.completeTask(taskName)
  }

  addSkill(): void {
    if (this.skillForm.valid && this.selectedPersonIndex !== null) {
      const selectedPerson = this.task.people[this.selectedPersonIndex];
      selectedPerson.skills.push({ name: this.skillForm.value.name }); 
      this.skillForm.reset(); 
      this.selectedPersonIndex = null; 
    }
  }

  deletePerson(taskIndex: number, personId: number) {
    this.taskService.deletePerson(taskIndex, personId)
  }

  deleteSkill(taskIndex: number, personId: number, skillIndex: number) {
    this.taskService.deleteSkill(taskIndex, personId, skillIndex)
  }
}
