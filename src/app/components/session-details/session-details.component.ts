import { Component,Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import { MdDialog } from '@angular/material';
import { RateSessionComponent }  from '../rate-session/rate-session.component';

@Component({
  selector: 'pd-session-details',
  templateUrl: './session-details.component.html',
  styleUrls: ['./session-details.component.scss']
})
export class SessionDetailsComponent {

    results: Object;
    constructor(http: Http, private dialog: MdDialog) {
      this.results = [];
      http.get('https://api.myjson.com/bins/pbbt5').map((res: Response) => res.json())
      .subscribe(res => this.results = res);
    }

  openRateDialog() {
   this.dialog.open(RateSessionComponent);
  }

}

