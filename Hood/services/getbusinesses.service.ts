import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Business} from './../src/app/interface/models/business.model'

@Injectable({
  providedIn: 'root'
})

export class GetbusinessesService {
  userData:any;
  api_link:string='http://localhost:8000/';
  update_url = 'http://127.0.0.1:8000/api/update/business/';

  constructor(private http:HttpClient) { }

  getAllBusinesses(){
    return this.http.get(this.api_link + `api/business/`)
  }

  getOneBusiness(id: any): Observable<any>{
    return this.http.get(this.api_link + `api/business/` + id + '/')
  }

  createBusiness(userData: any): Observable<any>{
    return this.http.post(this.api_link + `api/business/`, userData)
  }

  update(id: any, business: Business) {
    return this.http.put(this.api_link + `api/update/business/`, business);
  }
}


  