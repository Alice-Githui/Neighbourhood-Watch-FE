import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetallpostsService {
  api_link:string='https://neighbourapp-drf.herokuapp.com/';

  constructor(private http:HttpClient) { }

  getAllPosts(){
    return this.http.get(this.api_link + `api/posts/`)
  }
}


