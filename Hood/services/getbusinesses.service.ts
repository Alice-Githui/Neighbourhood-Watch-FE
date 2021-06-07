import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GetbusinessesService {
  userData:any;
  api_link:string='http://localhost:8000/';

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
}


  