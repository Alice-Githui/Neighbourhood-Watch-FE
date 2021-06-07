import { Component, OnInit } from '@angular/core';
import {CreatehoodService} from '../../../services/hoods/createhood.service';
import {Neighbourhood} from '../../../src/app/interface/models/neighbourhood';

@Component({
  selector: 'app-addhoods',
  templateUrl: './addhoods.component.html',
  styleUrls: ['./addhoods.component.css']
})
export class AddhoodsComponent implements OnInit {
  newhood: any;

  constructor(private createhoods: CreatehoodService) { }

  ngOnInit(): void {
    this.newhood={
      name: '', 
      location:'',
    }
  }

  createHood(){
    this.createhoods.createHood(this.newhood).subscribe(
      response =>{
        alert('Neighbourhood: ' +  " " + this.newhood.name + 'has been created') 
      },
      error => console.log('error', error)
    ) ;
  }


}


