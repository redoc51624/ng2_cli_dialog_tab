import { Injectable, OnInit } from '@angular/core';
import { Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SessionDetails{
private baseUrl: string = 'https://api.myjson.com/bins/pbbt5';
    constructor(private http:Http){
  }

     fetchData() {
         return this.http.get(`${this.baseUrl}`)
      .map((res:Response) => res.json());
     }

}

