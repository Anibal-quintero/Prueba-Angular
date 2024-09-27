import { Component, OnInit } from '@angular/core';
import { TaskService } from '../Task.service';
import { Skill, Task } from '../interface/interface';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }

  getSkillsString(skills: Skill[]): string {
    return skills.map(skill => skill.name).join(', ');
  }

  markAsCompleted(index: number): void {
    this.taskService.completeTask(index);
    // this.tasks[index].isCompleted = true; 
  }

  deleteTask(index: number): void {
    this.taskService.deleteTask(index);
  }
}
