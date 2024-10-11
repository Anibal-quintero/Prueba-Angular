import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { peop, Tasks } from 'src/interface/tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  private globalTaskInfo = new Subject<any>()
  info$ = this.globalTaskInfo.asObservable()

  tasks: Tasks[] = [
    {
      id: 1,
      taskName: "Tarea A",
      deadline: new Date().toLocaleDateString(),
      completed: false,
      people: [
        {
          fullName: "Juan Perez",
          age: 25,
          skills: ["JavasCript", "Angular"]
        },
        {
          fullName: "Maria Lopez",
          age: 30,
          skills: ["TypeScript", "CSS"]
        }
      ]
    },
    {
      id: 2,
      taskName: "Tarea B",
      deadline: new Date().toLocaleDateString(),
      completed: true,
      people: [
        {
          fullName: "Carlos Gomez",
          age: 40,
          skills: ["HTML", "SCSS"]
        }
      ]
    }
  ]

  infoTask(task: any) {
    this.globalTaskInfo.next(task)
  }

  addTask(task: Tasks) {
    if (task) {
      this.tasks.push(task)
    }
  }

  completeTask(taskID: number) {
    const task = this.tasks.find((task) => task.id === taskID)
    if (task) {
      task.completed = true
    }
  }

  addPerson(taskID: number, newPerson: peop) {
    const task = this.tasks.find(task => task.id === taskID)
    if (task) {
      task.people.push(newPerson)
    }
  }

  deletePerson(taskId: number, PersonId: number) {
    const task = this.tasks.find(task => task.id === taskId);
    if (task) {
      task.people.splice(PersonId, 1);
    }
  }

  deleteSkill(taskId: number, PersonId: number, skillIndex: number) {
    const task = this.tasks.find(task => task.id === taskId);
    if (task && task.people[PersonId]) {
      task.people[PersonId].skills.splice(skillIndex, 1);
    }
  }

}
