import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  userData: any;


  api_link:string='http://localhost:8000/';
  constructor(private http: HttpClient) { }

  loginUser(userData: any):Observable<any>{
    return this.http.post(this.api_link + `loginuser/`, userData)
  }
}
