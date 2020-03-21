import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';

@NgModule({
  imports: [RouterModule.forRoot([
    {path: '', component: HomePageComponent, pathMatch: 'full'},
    // for lazy loading:
    // {path: 'about', loadChildren: './about-page/about-page.module#AboutPageModule'}
    // or:
    {path: 'about', loadChildren: () => import('./about-page/about-page.module')
        .then(module => module.AboutPageModule)}
  ])],
  exports: [RouterModule],
})

export class AppRoutingModule {}


