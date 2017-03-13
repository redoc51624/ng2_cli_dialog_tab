import { Component } from '@angular/core';
import { Http , Response } from '@angular/http';
// import { MdDialog } from '@angular/material';
import { SessionDetailsComponent } from '../session-details/session-details.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-session-list', // <my-app></my-app>
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.scss'],
})
export class SessionListComponent  {
// ,private dialog: MdDialog
    results: Object;
    constructor(http: Http, private router: Router ) {
      this.results = [];
      http.get('https://api.myjson.com/bins/pbbt5').map((res: Response) => res.json())
      .subscribe(res => this.results = res);

  }

   openSessionDetail() {
  document.getElementById("navigation-bar").style.display = "none";
  this.router.navigate(['./session-details']);
   }

  // }
  // addSession(){
  // }

}

