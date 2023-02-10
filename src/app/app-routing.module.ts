import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:'' ,component:UsersComponent},
  {path:'/user/:id' ,component:UsersComponent},
  {path:'/posts' ,component:UsersComponent}
  // children :[{path:create ,component:UsersComponent}]
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
