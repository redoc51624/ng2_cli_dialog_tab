import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './filter/filter.component';
import { TabComponent } from './tab/tab.component';
import { MaterialModule } from '@angular/material';
import { SessionListComponent } from './session-list/session-list.component';
import { RateSessionComponent } from './rate-session/rate-session.component';
import { SessionDetailsComponent } from './session-details/session-details.component';
@NgModule({
  imports: [
    CommonModule,
    MaterialModule

  ],
  entryComponents:[SessionDetailsComponent,RateSessionComponent],
  declarations: [FilterComponent, TabComponent, SessionListComponent, RateSessionComponent, SessionDetailsComponent],
  exports: [FilterComponent]
})
export class ComponentsModule { }
