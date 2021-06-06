import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessesComponent } from './businesses/businesses.component';
import { NeighbourhoodsComponent } from './neighbourhoods/neighbourhoods.component';
import {RegistrationComponent} from './registration/registration.component';
import {LoginComponent} from './login/login.component';
import {PostsComponent} from './posts/posts.component'
import { ShowpostsComponent } from './showposts/showposts.component';

const routes: Routes = [
  {path: 'neighbourhoods', component:NeighbourhoodsComponent},
  {path: 'registration', component:RegistrationComponent},
  {path:'businesses', component:BusinessesComponent},
  {path: 'login', component:LoginComponent},
  {path: 'makepost', component:PostsComponent},
  {path: 'home', component:ShowpostsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
