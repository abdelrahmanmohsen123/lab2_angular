import { Component } from '@angular/core';
import posts from './../db/posts.json'
import { Post} from '../interfaces/Post'

@Component({
  selector: 'app-my-first-component',
  templateUrl: './my-first-component.component.html',
  styleUrls: ['./my-first-component.component.css']
})

export class MyFirstComponentComponent {

  // count  = 0
  // image :String = '/assets/f6.jpg';
  posts :Array<Post>

  // isfollow = true
  constructor(){
    console.log('hi')
    this.posts =posts

    // setInterval(()=> this.count++,1000)
    // this.users = users
  }

  onchangeFollow(id :number){
    // this.posts.creator.isFollowing = !posts.creator.isFollowing
    posts.filter((p)=> p.id==id).map((post)=>{
      post.creator.isFollowing = !post.creator.isFollowing
      if(post.creator.isFollowing == true) post.creator.followers++
      else post.creator.followers--

    })

    // this.posts
  }



}
