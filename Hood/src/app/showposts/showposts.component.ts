import { Component, OnInit } from '@angular/core';
import {Post} from '../../../../Hood/classes/post'
import {GetallpostsService} from '../../../services/getallposts.service';

@Component({
  selector: 'app-showposts',
  templateUrl: './showposts.component.html',
  styleUrls: ['./showposts.component.css']
})
export class ShowpostsComponent implements OnInit {

  posts: any;

  constructor(private postsService:GetallpostsService) { 
    
  }

  ngOnInit(): void {
    this.AllPosts()
  }

  AllPosts(){
    this.postsService.getAllPosts().subscribe(posts =>{
      this.posts=posts;
      console.log(this.posts);
    })
  } 

}
