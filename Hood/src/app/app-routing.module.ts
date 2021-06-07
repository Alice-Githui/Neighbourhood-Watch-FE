import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessesComponent } from './businesses/businesses.component';
import { NeighbourhoodsComponent } from './neighbourhoods/neighbourhoods.component';
import {RegistrationComponent} from './registration/registration.component';
import {LoginComponent} from './login/login.component';
import {PostsComponent} from './posts/posts.component'
import { ShowpostsComponent } from './showposts/showposts.component';
import { AddhoodsComponent } from './addhoods/addhoods.component';

const routes: Routes = [
  {path: 'neighbourhoods', component:NeighbourhoodsComponent},
  {path: 'registration', component:RegistrationComponent},
  {path:'businesses', component:BusinessesComponent},
  {path: 'login', component:LoginComponent},
  {path: 'makepost', component:PostsComponent},
  {path: 'home', component:ShowpostsComponent},
  {path: 'newhood', component:AddhoodsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
