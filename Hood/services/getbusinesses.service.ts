import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class GetbusinessesService {
  api_link:string='http://localhost:8000/';

  constructor(private http:HttpClient) { }

  getAllBusinesses(){
    return this.http.get(this.api_link + `api/business/`)
  }
}


  