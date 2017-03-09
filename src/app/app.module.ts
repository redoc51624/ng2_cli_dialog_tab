import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { GanttChart } from 'angular-gantt-chart';

import { AppRoutingModule } from './routing/app-routing.module';

import { DataService } from './services/data.service';

import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AgendaComponent } from './components/agenda/agenda.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MyScheduleComponent } from './components/my-schedule/my-schedule.component';
import {MyPassComponent} from './components/my-pass/my-pass.component';


@NgModule({
  declarations: [
    AppComponent,
    AgendaComponent,
    NotFoundComponent,
    MyScheduleComponent,
    MyPassComponent
  ],
  imports: [
     ComponentsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    AppRoutingModule,
    GanttChart
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
