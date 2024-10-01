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
        },
        {
          fullName: 'Ramires Martinez',
          age: 20,
          skills: [{ name: 'Angular' }, { name: 'React' }]
        }
      ]
    },
    {
      name: 'Tarea B',
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
    },
    {
      name: 'Tarea C',
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

  deletePerson(taskIndex: number, personIndex: number): void {
    this.tasks[taskIndex].people.splice(personIndex, 1);
  }

  deleteSkill(taskIndex: number, personIndex: number, skillIndex: number) {
    this.tasks[taskIndex].people[personIndex].skills.splice(skillIndex, 1)
  }

  completeTask(taskName: string): void {
    const task = this.tasks.find(t => t.name === taskName);
    if (task) {
      task.isCompleted = true;
    }
  }

  filterTasks(isCompleted: boolean): Task[] {
    return this.tasks.filter(task => task.isCompleted === isCompleted);
  }
}
