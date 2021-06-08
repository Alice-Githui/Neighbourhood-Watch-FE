import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostserviceService {
  userData: any;

  api_link:string='https://neighbourapp-drf.herokuapp.com/';

  constructor(private http: HttpClient) { }

  createPost(userData: any):Observable<any>{
    return this.http.post(this.api_link + `api/posts/`, userData)
  }
}


