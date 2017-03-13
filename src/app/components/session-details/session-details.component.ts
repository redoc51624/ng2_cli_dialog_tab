import { Component,OnInit } from '@angular/core';
import { Http , Response } from '@angular/http';
import { MdDialog } from '@angular/material';
import { RateSessionComponent }  from '../rate-session/rate-session.component';
import { SessionDetails } from '../../services/session-details/session-details.service';
import { Router } from '@angular/router';

@Component({
  selector: 'pd-session-details',
  templateUrl: './session-details.component.html',
  styleUrls: ['./session-details.component.scss']
})
export class SessionDetailsComponent {

    constructor(private SessionDetails: SessionDetails, private dialog: MdDialog, private router: Router){ }
     results = [];

      ngOnInit() {

    this.SessionDetails.fetchData().subscribe(data => this.results = data);

};
      openRateDialog() {
   this.dialog.open(RateSessionComponent);
  };
  backTolist(){
     document.getElementById("navigation-bar").style.display = "block";
     this.router.navigate(['./day1']);
  }

}


