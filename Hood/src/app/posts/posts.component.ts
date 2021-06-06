import { Component, OnInit } from '@angular/core';
import {PostserviceService} from '../../../services/postservice.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  newPost:any;


  constructor(private postService:PostserviceService) { }

  ngOnInit(): void { 
    this.newPost={
      name: '', 
      description:'', 
      date: Date()
    }
  }

  createPost(){
    this.postService.createPost(this.newPost).subscribe(
      response =>{
        alert('New Post has been created') 
      },
      error => console.log('error', error)
    ) ;
  }


}
