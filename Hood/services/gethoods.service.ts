import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GethoodsService {
  api_link:string='http://localhost:8000/';
  
  constructor(private http:HttpClient) { }

  getAllHoods(){
    return this.http.get(this.api_link + `api/neighbours/`)
  }

  getOneHood(id: any){
    return this.http.get(this.api_link + `api/neighbours/` + id + '/')
  }
}
