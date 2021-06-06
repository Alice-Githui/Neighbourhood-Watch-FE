import { Component, OnInit, Input} from '@angular/core';
import {Post} from 'classes/post'

@Component({
  selector: 'app-postdetailcomponent',
  templateUrl: './postdetailcomponent.component.html',
  styleUrls: ['./postdetailcomponent.component.css']
})
export class PostdetailcomponentComponent implements OnInit {

  @Input() post: Post | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
