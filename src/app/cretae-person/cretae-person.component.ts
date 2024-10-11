import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-cretae-person',
  templateUrl: './cretae-person.component.html',
  styleUrls: ['./cretae-person.component.css']
})
export class CretaePersonComponent {

  @Input() taskId = 0
  @Output() statusForm = new EventEmitter<boolean>()
  dataPerson: FormGroup
  availableSkills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node.js',
    'Python',
    'Git',
    'SQL',
    'Bootstrap',
    'TypeScript',
    'Vue.js',
    'PHP',
    'Java',
    'Sass',
    'Django'
  ]
  skills: string[] = []

  constructor(private formBuilder: FormBuilder, private taskService: TaskService) {
    this.dataPerson = this.formBuilder.group({
      fullName: ['', Validators.required],
      age: ['', Validators.required],
      skills: [this.skills]
    })
  }

  onSkillChange(event: Event) {
    const checkbox = event.target as HTMLInputElement
    if (checkbox.checked) {
      this.skills.push(checkbox.value)
    }
  }

  onSubmitPerson() {
    this.taskService.addPerson(this.taskId, this.dataPerson.value)
    this.dataPerson.reset()
    this.statusForm.emit(false)
  }
}
