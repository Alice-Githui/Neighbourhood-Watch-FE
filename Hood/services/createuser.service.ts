import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateuserService {
  userData: any;

  api_link:string='https://neighbourapp-drf.herokuapp.com/';
  constructor(private http:HttpClient) { }

  registerUser(userData: any):Observable<any>{
    return this.http.post(this.api_link + `register/`, userData)
  }

}


