import { Component, OnInit } from '@angular/core';
import {GetbusinessesService} from '../../../services/getbusinesses.service';

@Component({
  selector: 'app-businesses',
  templateUrl: './businesses.component.html',
  styleUrls: ['./businesses.component.css']
})
export class BusinessesComponent implements OnInit {
  businesses:any
  constructor(private businessService:GetbusinessesService) { }

  ngOnInit(): void {
    this.AllBusinesses()
  }

  AllBusinesses(){
    this.businessService.getAllBusinesses().subscribe(businesses =>{
      this.businesses=businesses;
      console.log(this.businesses);
    })
  } 

}
