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

  // Agregar nueva persona
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

  // Mostrar el formulario para agregar habilidad a una persona específica
  showSkillForm(index: number): void {
    this.selectedPersonIndex = index; // Guardar el índice de la persona seleccionada
  }

  // Agregar habilidad a la persona seleccionada
  addSkill(): void {
    if (this.skillForm.valid && this.selectedPersonIndex !== null) {
      const selectedPerson = this.task.people[this.selectedPersonIndex]; // Usar el índice de la persona seleccionada
      selectedPerson.skills.push({ name: this.skillForm.value.name }); // Agregar habilidad
      this.skillForm.reset(); // Limpiar el formulario
      this.selectedPersonIndex = null; // Restablecer el índice después de agregar la habilidad
    }
  }

  deletePerson(taskId: number, personId: number) {
    this.taskService.deletePerson(taskId, personId)
  }

  deleteSkill(taskId: number, personId: number, skillIndex: number) {
    this.taskService.deleteSkill(taskId, personId, skillIndex)
  }
}
