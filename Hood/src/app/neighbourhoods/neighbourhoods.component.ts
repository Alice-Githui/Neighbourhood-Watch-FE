import { Component, OnInit } from '@angular/core';
import {GethoodsService} from '../../../services/gethoods.service';
import {HttpClient} from '@angular/common/http';
import {Neighbourhood} from '../interface/models/neighbourhood'


@Component({
  selector: 'app-neighbourhoods',
  templateUrl: './neighbourhoods.component.html',
  styleUrls: ['./neighbourhoods.component.css']
})
export class NeighbourhoodsComponent implements OnInit {
  neighbourhood: Neighbourhood[] = [];
  hoods: any;
  hood: any;

  constructor(private hoodsService:GethoodsService, private http: HttpClient) { }

  ngOnInit(): void {
    this.AllHoods();
  }

  AllHoods(){
    this.hoodsService.getAllHoods().subscribe(hoods =>{
      this.hoods=hoods;      
      // console.log(this.hoods);
    })
  }  

  hoodClicked =(hood: any) =>{
      console.log(hood.id)
      this.hoodsService.getOneHood(hood.id).subscribe(
        hoods =>{
          console.log(hoods)
        },
        error =>{
          console.log(error)

        }
      );    
  }


}

