import { Injectable, OnInit } from '@angular/core';
import { Http, Response} from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DataService{

    data: Promise<Response>;
    private url = 'https://jsonplaceholder.typicode.com/posts';   

     constructor(private http: Http){
        this.data = this.fetchData();
     }

     fetchData() : Promise<Response>{
         return this.http.get(this.url)
         .toPromise();
     }

}