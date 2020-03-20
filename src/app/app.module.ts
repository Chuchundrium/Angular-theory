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
  declarations: [
    AppComponent,
    ColorDirective,
    AboutPageComponent,
    HomePageComponent,
    PageNamePipe,
    AboutExtraPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
