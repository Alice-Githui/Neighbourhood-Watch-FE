import { Component, OnInit } from '@angular/core';
import {CreateuserService} from '../../../services/createuser.service'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  users:any;

  constructor(private createuserservice:CreateuserService) { }

  ngOnInit(): void { 
    // this.Registration();
  }

  // Registration(){
  //   this.createuserservice.getRegistration().subscribe(users =>{
  //     this.users=users;
  //     console.log(this.users);
  //   })
  // } 

}
