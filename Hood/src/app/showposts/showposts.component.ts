import { Component, OnInit } from '@angular/core';
import { PostsComponent } from '../posts/posts.component';
import {Post} from '../../../../Hood/classes/post'

@Component({
  selector: 'app-showposts',
  templateUrl: './showposts.component.html',
  styleUrls: ['./showposts.component.css']
})
export class ShowpostsComponent implements OnInit {
  posts:Post[]=[
    new Post('githui', 'First Post', new Date()),
    new Post('alice', 'Second Post', new Date()),
    new Post('a.githui', 'Another Post', new Date()),
  ];

  addNewPost(post: Post){
    let postLength=this.posts.length
    post.date=new Date(post.date)
    this.posts.push(post)
  }
  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
