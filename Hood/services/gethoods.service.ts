import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GethoodsService {
  userData: any; 
  api_link:string='https://neighbourapp-drf.herokuapp.com/';
  
  constructor(private http:HttpClient) { }

  getAllHoods(){
    return this.http.get(this.api_link + `api/neighbours/`)
  }

  getOneHood(id: any){
    return this.http.get(this.api_link + `api/neighbours/` + id + '/')
  }
}


