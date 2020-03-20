import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ColorDirective } from './shared/color.directive';
import { AboutPageComponent } from './about-page/about-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNamePipe } from './shared/page-name.pipe';
import { AboutExtraPageComponent } from './about-page/about-extra-page/about-extra-page.component';

@NgModule({
  // for registration of: Components, Directives, Pipes
  declarations: [
    AppComponent,
    ColorDirective,
    AboutPageComponent,
    HomePageComponent,
    PageNamePipe,
    AboutExtraPageComponent
  ],

  // for other Modules
  imports: [

    // for Angular working in browsers + other base useful things
    BrowserModule,

    // for working with ngModel, ngForms, etc.
    FormsModule,

    // own Modules
    AppRoutingModule
  ],

  // for Services
  providers: [],

  // for main Component in app
  bootstrap: [AppComponent]
})
export class AppModule { }
