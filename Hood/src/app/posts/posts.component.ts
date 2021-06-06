import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Post} from 'classes/post'
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  newPost =new Post('', '', new Date());
  @Output() addPost=new EventEmitter<Post>();

  submitPost(){
    this.addPost.emit(this.newPost);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
