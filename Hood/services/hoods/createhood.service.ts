import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Neighbourhood} from '../../src/app/interface/models/neighbourhood';


@Injectable({
  providedIn: 'root'
})
export class CreatehoodService {

  userData: any;
  api_link:string='http://localhost:8000/';
  update_api_link:string='http://localhost:8000/'

  constructor(private http:HttpClient) { }

  createHood(userData: any): Observable<any>{
    return this.http.post(this.api_link + `api/neighbours/`, userData)

  }

}