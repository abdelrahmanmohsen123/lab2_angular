import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  users ?: any
  constructor(private httpClient : HttpClient) {

  }

  getUsers(){
    return this.httpClient.get('https://jsonplaceholder.typicode.com/users')

      // .subscribe(users => {
      //   console.log(users);
      //   this.users  = users
      // });
  }
}
