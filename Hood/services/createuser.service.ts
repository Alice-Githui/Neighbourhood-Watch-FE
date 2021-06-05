import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CreateuserService {

  api_link:string='http://localhost:8000/';
  constructor(private http:HttpClient) { }

  // getRegistration(){
  //   return this.http.get(this.api_link + `register/`)
  // }
}
