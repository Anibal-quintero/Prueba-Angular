import { Injectable } from '@angular/core';
import { Task } from './interface/interface';

@Injectable({
  providedIn: 'root'
})

export class TaskService {

  private tasks: Task[] = [
    {
      id: 0,
      name: 'Tarea A',
      dueDate: new Date('2024-09-30'),
      isCompleted: false,
      people: [
        {
          fullName: 'Juan Perez',
          age: 30,
          skills: [{ name: 'JavaScript' }, { name: 'Angular' }]
        },
        {
          fullName: 'Ramires Martinez',
          age: 20,
          skills: [{ name: 'Angular' }, { name: 'React' }]
        }
      ]
    }
  ];

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(task: Task): void {
    this.tasks.push(task);
  }

  deletePerson(taskId: number, personIndex: number): void {
    const task = this.tasks.find(t => t.id === taskId);
    if (task && personIndex >= 0 && personIndex < task.people.length) {
      task.people.splice(personIndex, 1);
    }
  }

  deleteSkill(taskId: number, personIndex: number, skillIndex: number) {
    const task = this.tasks.find(t => t.id === taskId);
    if (task) {
      const person = task.people[personIndex]; // Obtén la persona por el índice
      if (person && person.skills) {
        person.skills.splice(skillIndex, 1); // Elimina la habilidad en la posición skillIndex
      }
    }
  }

  // Marcar tarea como completada
  completeTask(taskName: string): void {
    const task = this.tasks.find(t => t.name === taskName);
    if (task) {
      task.isCompleted = true;
    }
  }

  // Filtrar tareas por estado (completadas o pendientes)
  filterTasks(isCompleted: boolean): Task[] {
    return this.tasks.filter(task => task.isCompleted === isCompleted);
  }
}
