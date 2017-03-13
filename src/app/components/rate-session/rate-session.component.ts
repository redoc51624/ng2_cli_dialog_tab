import { Component, OnInit} from '@angular/core';
import { Http , Response } from '@angular/http';
import { RateSession } from '../../services/rate-session/rate-session.service';

@Component({
  selector: 'app-rate-session',
  templateUrl: './rate-session.component.html',
  styleUrls: ['./rate-session.component.scss']
})
export class RateSessionComponent  {

    constructor(private RateSession: RateSession){ }
     questions = [];

      ngOnInit() {

    this.RateSession.fetchData().subscribe(data => this.questions = data);
      }
}




