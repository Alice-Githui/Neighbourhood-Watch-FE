import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessesComponent } from './businesses/businesses.component';
import { NeighbourhoodsComponent } from './neighbourhoods/neighbourhoods.component';
import {RegistrationComponent} from './registration/registration.component';

const routes: Routes = [
  {path: 'neighbourhoods', component:NeighbourhoodsComponent},
  {path: 'registration', component:RegistrationComponent},
  {path:'businesses', component:BusinessesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
