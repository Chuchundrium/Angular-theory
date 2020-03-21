import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';

@NgModule({
  imports: [RouterModule.forRoot([
    {path: '', component: HomePageComponent, pathMatch: 'full'}
  ])],

  // export to 'public' api. All methods are private by default
  exports: [RouterModule],
})

export class AppRoutingModule {}


