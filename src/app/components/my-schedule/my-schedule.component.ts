import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';

@Component({
  
  selector: 'app-my-schedule',
  templateUrl: './my-schedule.component.html',
  styleUrls: ['./my-schedule.component.css'],

})
export class MyScheduleComponent implements OnInit {
data=[];
  constructor(private http: Http) { 
     this.http.get('https://api.myjson.com/bins/190bq9')
                .subscribe(res => this.data = res.json());

  }


  ngOnInit() {

  }
// window.scroll



}
