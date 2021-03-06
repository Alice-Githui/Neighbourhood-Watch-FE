import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from  '@angular/forms';   


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NeighbourhoodsComponent } from './neighbourhoods/neighbourhoods.component';
import { RegistrationComponent } from './registration/registration.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BusinessesComponent } from './businesses/businesses.component';
import { LoginComponent } from './login/login.component';
import { PostsComponent } from './posts/posts.component';
import { ShowpostsComponent } from './showposts/showposts.component';
import { PostdetailcomponentComponent } from './postdetailcomponent/postdetailcomponent.component';
import { AddhoodsComponent } from './addhoods/addhoods.component';
import { AddbusinessComponent } from './addbusiness/addbusiness.component';

@NgModule({
  declarations: [
    AppComponent,
    NeighbourhoodsComponent,
    RegistrationComponent,
    NavbarComponent,
    BusinessesComponent,
    LoginComponent,
    PostsComponent,
    ShowpostsComponent,
    PostdetailcomponentComponent,
    AddhoodsComponent,
    AddbusinessComponent  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
