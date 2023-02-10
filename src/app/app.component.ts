import { Component,Input } from '@angular/core';
import { Post } from './interfaces/Post';
import post from './db/posts.json'
import { UserServiceService } from './user-service.service';
import { User } from './interfaces/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message = 'my-app';
  users ?:any
  constructor(private UserService : UserServiceService) {


  }
  ngOnInit(){
     this.UserService.getUsers().subscribe((respnse)=>{
      this.users = respnse

     })
  }

  // getId(id){

  // }


  // post :Array<Post>

  // constructor(post : Array<Post>){
  //   this.post =post
  // }

  // onAlert(){
  //   console.log('alerted')
  // }
  // test =0
  // show = true
  // onNewData(data:Number){
  //   console.log('new data recieved : ',data)
  // }

  // onTest(){
  //   this.test++
  // }



}
