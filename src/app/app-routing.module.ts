import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {PostsComponent} from './posts/posts.component';

// http://localhost:4200/ -> HomeComponent
// http://localhost:4200/about -> AboutComponent
// http://localhost:4200/posts -> PostsComponent

const routes: Routes = [
  {path: '', component: HomeComponent}, // !!! NB: don't use path with '/' here
  {path: 'about', component: AboutComponent},
  {path: 'posts', component: PostsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // for array routes registration
  exports: [RouterModule],
})

export class AppRoutingModule {

}


