import { Component, OnInit } from '@angular/core';
import {CreateuserService} from '../../../services/createuser.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  register:any;


  constructor(private createUserService:CreateuserService) { }

  ngOnInit(): void { 
    this.register={
      username: '', 
      email:'',
      password:'', 
      confirmpassword:''
    }
  }

  registerUser(){
    this.createUserService.registerUser(this.register).subscribe(
      response =>{
        alert('User' + this.register.username + 'has been created') 
      },
      error => console.log('error', error)
    ) ;
  }


}
