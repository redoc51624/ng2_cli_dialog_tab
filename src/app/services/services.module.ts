import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SessionsService } from './sessions/sessions.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [SessionsService]
})
export class ServicesModule { }
