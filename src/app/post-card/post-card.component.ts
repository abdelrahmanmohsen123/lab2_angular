import { Component,Input } from '@angular/core';
import { Post } from '../interfaces/Post';
import post from './../db/posts.json'

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent {
  constructor(){
    console.log('hi')
  }
  // @Input('post') post : Array<Post>

  // constructor(post : Array<Post>){
  //   this.post =post
  // }
}
