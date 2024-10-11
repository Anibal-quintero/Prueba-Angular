import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { FilterTaskComponent } from './filter-task/filter-task.component';
import { CretaePersonComponent } from './cretae-person/cretae-person.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksListComponent,
    CreateTaskComponent,
    FilterTaskComponent,
    CretaePersonComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
