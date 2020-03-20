import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutPageComponent} from './about-page/about-page.component';
import {HomePageComponent} from './home-page/home-page.component';
import { AboutExtraPageComponent } from './about-page/about-extra-page/about-extra-page.component';

@NgModule({
  imports: [RouterModule.forRoot([
    {path: 'about', component: AboutPageComponent, children: [
        {path: 'extra', component: AboutExtraPageComponent}
      ]},
    {path: '', component: HomePageComponent, pathMatch: 'full'}
  ])],

  // export to 'public' api. All methods are private by default
  exports: [RouterModule],
})

export class AppRoutingModule {}


