import { Component, OnInit } from '@angular/core';
import {GetbusinessesService} from '../../../services/getbusinesses.service';
import {HttpClient} from '@angular/common/http';
import {Business} from '../interface/models/business.model'

@Component({
  selector: 'app-addbusiness',
  templateUrl: './addbusiness.component.html',
  styleUrls: ['./addbusiness.component.css']
})
export class AddbusinessComponent implements OnInit {
  business: Business[] = [];
  newBusiness: any;
 
  constructor(private http: HttpClient, private businessService:GetbusinessesService) { }

  ngOnInit(): void {
    this.newBusiness={
      name: '', 
      email: '', 
      ownerid: '', 
      hoodid:'',      
    }

  }

  createBusiness(){
    this.businessService.createBusiness(this.newBusiness).subscribe(
      response =>{
        alert('New business has been created') 
      },
      error => console.log('error', error)
    ) ;

  }

  updateBusiness(id: any, business: Business) {
    this.businessService.update(id, business).subscribe((result) => {
      console.warn('result', result);
    });
    console.warn(id);
  }

}
