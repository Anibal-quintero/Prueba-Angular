import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../Task.service';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  @Input() hiddenForm: boolean = true;
  taskForm: FormGroup;

  constructor(private fb: FormBuilder, private taskService: TaskService) {
    this.taskForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],  // Nombre de la tarea
      dueDate: ['', Validators.required],  // Fecha de entrega
      people: this.fb.array([])  // Personas asociadas
    });
  }

  // Guardar tarea
  saveTask(): void {
    if (this.taskForm.valid) {
      this.taskService.addTask(this.taskForm.value);  // Añadir tarea al servicio
      this.taskForm.reset();  // Limpiar el formulario
    }
  }
}
