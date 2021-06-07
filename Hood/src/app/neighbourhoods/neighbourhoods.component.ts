import { Component, OnInit } from '@angular/core';
import {GethoodsService} from '../../../services/gethoods.service'

@Component({
  selector: 'app-neighbourhoods',
  templateUrl: './neighbourhoods.component.html',
  styleUrls: ['./neighbourhoods.component.css']
})
export class NeighbourhoodsComponent implements OnInit {
  hoods: any;
  name: any;
  location: any;

  constructor(private hoodsService:GethoodsService) { }

  ngOnInit(): void {
    this.AllHoods();
  }

  AllHoods(){
    this.hoodsService.getAllHoods().subscribe(hoods =>{
      this.hoods=hoods;
      
      console.log(this.hoods);
    })
  }  

  hoodClicked=(hood: { id: any; }) =>{
    this.hoodsService.getOneHood(hood.id).subscribe(hood =>{
      // this.hoods=hoods;
      // this.name= hoods.location;
      // this.location=hoods.name;

    })
  }

}

