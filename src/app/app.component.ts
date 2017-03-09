import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   name= "Nisheed Jagdish";

   routeLinks = [
    {label: 'Agenda', link: 'agenda'},
    {label: 'Jan 31', link: 'day1' },
    {label: 'Feb 1', link: 'day2'},
    {label: 'Feb 2', link: 'day3'},
    {label: 'My Schedule', link: 'myschedule'},
    {label: 'My Pass', link: 'mypass'}
  ];

  // activeLinkIndex =
  //       this.routeLinks.indexOf(this.routeLinks.find(tab => router.url.indexOf(tab.link) != -1));
  // };

   public gantt_ChartData={
     "date":"2017-02-09",
     "taskArray":[
        {
           "task":"Breakfast",
           "startTime":"8:30am",
           "endTime":"11:00am"
        },
        {
           "task":"Badge Pick-up",
           "startTime":"8:00am",
           "endTime":"7:00pm"
        },
        {
           "task":"Angular 2",
           "startTime":"9:00am",
           "endTime":"8:00pm"
        },
        {
           "task":"Lunch",
           "startTime":"11:30am",
           "endTime":"1:30pm"
        },
        {
           "task":"Android Session",
           "startTime":"8:30am",
           "endTime":"8:00pm"
        },
        {
           "task":"Codelabs",
           "startTime":"8:30am",
           "endTime":"8:00pm"
        },
        {
           "task":"Closing Ceremony",
           "startTime":"6:00pm",
           "endTime":"10:00pm"
        }
     ]
  }
  public gantt_chart_options={
    rectColor:"skyblue", //Hex code or color name can be given
    lineColor:"black",
    labelColor:"green"
  }
}
