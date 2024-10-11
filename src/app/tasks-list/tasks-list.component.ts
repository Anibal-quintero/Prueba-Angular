import { Component, Input, OnInit } from '@angular/core';
import { Tasks } from 'src/interface/tasks';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {

  @Input() tasks: Tasks[] = []
  visibilitiForm = false
  taskId = 0

  constructor(private taskSevice: TaskService) { }

  ngOnInit(): void { }

  completeTask(taskID: number) {
    this.taskSevice.completeTask(taskID)
  }

  openPersonForm(taskId: number) {
    this.visibilitiForm = true
    this.taskId = taskId
  }

  closeForm($event: any) {
    this.visibilitiForm = $event
  }

  deletePerson(taskId: number, PersonId: number) {
    this.taskSevice.deletePerson(taskId, PersonId)
  }

  deleteSkill(taskId: number, PersonId: number, skillIndex: number) {
    this.taskSevice.deleteSkill(taskId, PersonId, skillIndex)
  }
}
