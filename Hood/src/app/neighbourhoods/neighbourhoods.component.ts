import { Component, OnInit } from '@angular/core';
import {GethoodsService} from '../../../services/gethoods.service'

@Component({
  selector: 'app-neighbourhoods',
  templateUrl: './neighbourhoods.component.html',
  styleUrls: ['./neighbourhoods.component.css']
})
export class NeighbourhoodsComponent implements OnInit {
  hoods: any;
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

}
