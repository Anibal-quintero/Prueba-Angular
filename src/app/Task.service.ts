// services/task.service.ts
import { Injectable } from '@angular/core';
import { Task } from './interface/interface';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [
    {
      name: 'Tarea A',
      dueDate: new Date('2024-09-30'),
      isCompleted: false,
      people: [
        {
          fullName: 'Juan Perez',
          age: 30,
          skills: [{ name: 'JavaScript' }, { name: 'Angular' }]
        } ,
        {
          fullName: 'Ramires martinez',
          age: 20,
          skills: [{ name: 'Angular' }, { name: 'React' }]
        }
      ]
    }
  ];

  // Obtener todas las tareas
  getTasks(): Task[] {
    return this.tasks;
  }

  // Agregar una nueva tarea
  addTask(task: Task): void {
    this.tasks.push(task);
  }

  // Marcar tarea como completada
  completeTask(index: number): void {
    if (this.tasks[index]) {
      this.tasks[index].isCompleted = true;
    }
  }

  // Eliminar tarea
  deleteTask(index: number): void {
    this.tasks.splice(index, 1);
  }
}
