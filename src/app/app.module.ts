import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import {AboutPageModule} from './about-page/about-page.module';
import {SharedModule} from './shared/shared.module';

@NgModule({
  // for registration of: Components, Directives, Pipes
  declarations: [
    AppComponent,
    HomePageComponent
  ],

  // for other Modules
  imports: [

    // for Angular working in browsers + other base useful things
    BrowserModule,

    // for working with ngModel, ngForms, etc.
    FormsModule,

    // own Modules
    AppRoutingModule,
    AboutPageModule,
    SharedModule
  ],

  // for Services
  providers: [],

  // for main Component in app
  bootstrap: [AppComponent]
})
export class AppModule { }
