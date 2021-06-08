import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Neighbourhood} from '../../src/app/interface/models/neighbourhood';


@Injectable({
  providedIn: 'root'
})
export class CreatehoodService {

  userData: any;
  api_link:string='https://neighbourapp-drf.herokuapp.com/';
  update_url = 'https://neighbourapp-drf.herokuapp.com/api/update/neighbours/';

  constructor(private http:HttpClient) { }

  createHood(userData: any): Observable<any>{
    return this.http.post(this.api_link + `api/neighbours/`, userData)

  }
  update(id: any, neighborhood: Neighbourhood) {
    return this.http.put(`${this.update_url}${id}/`, neighborhood);
  }

}
