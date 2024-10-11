import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter-task',
  templateUrl: './filter-task.component.html',
  styleUrls: ['./filter-task.component.css']
})
export class FilterTaskComponent {

  @Output() selectValue = new EventEmitter<string>()
  @Output() statusForm = new EventEmitter<boolean>()

  selectedTeam = '';

  onSelected(value: string): void {
    this.selectedTeam = value
    this.selectValue.emit(this.selectedTeam)
  }

  sendStatusForm() {
    this.statusForm.emit(true);
  }
}
