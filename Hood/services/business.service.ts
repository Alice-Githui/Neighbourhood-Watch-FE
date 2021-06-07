import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Business} from 'src/app/interface/models/business.model';

const baseUrl='http://localhost:8000';
const allBusinessUrl='http://localhost:8000/api/business/';
const addurl = 'http://localhost:8000/api/business/post/';
const updateurl = 'http://localhost:8000/api/update/business/';
const geturl = 'http://localhost:8000/api/business/get/';
const deleteurl = 'http://localhost:8000/api/delete/business/';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  constructor(private http:HttpClient) { }
  getAll(): Observable<Business[] >{
    return this.http.get<Business[]>(baseUrl);
  }
  get(id:any): Observable<Business>{
    return this.http.get(`${geturl}${id}`);
  }
  create(data:{name: string; description: string; email: string; neighbourhood: string; user: string;}){
    return this.http.post(addurl, data);
  }

  update(id: any, data:any): Observable<any>{
    return this.http.put(`${updateurl}${id}/`, data)
  }
  delete(id: any): Observable<any>{
    return this.http.delete(`${deleteurl}${id}`)
  }
}
