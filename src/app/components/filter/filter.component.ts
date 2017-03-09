import { Component, OnInit } from '@angular/core';
import {SessionsService} from '../../services/sessions/sessions.service';

@Component({
  selector: 'pd-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  constructor(private session: SessionsService) { }

  ngOnInit() {
    this.session.listenToService();
  }

}
