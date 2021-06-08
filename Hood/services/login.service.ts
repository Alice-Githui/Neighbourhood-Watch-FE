import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  userData: any;


  api_link:string='https://neighbourapp-drf.herokuapp.com/';
  constructor(private http: HttpClient) { }

  loginUser(userData: any):Observable<any>{
    return this.http.post(this.api_link + `authlogin/`, userData)
  }
}




