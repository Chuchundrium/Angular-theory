import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {PostsComponent} from './posts/posts.component';
import {PostComponent} from './post/post.component';
import {AboutExtraComponent} from './about-extra/about-extra.component';
import {ErrorPageComponent} from './error-page/error-page.component';
import {AuthGuard} from './auth.guard';
import {PostResolver} from './post.resolver';

// http://localhost:4200/ -> HomeComponent
// http://localhost:4200/about -> AboutComponent
// http://localhost:4200/posts -> PostsComponent
// http://localhost:4200/about/extra -> AboutExtraComponent

const routes: Routes = [
  {path: '', component: HomeComponent}, // !!! NB: don't use path with '/' here
  {path: 'about', component: AboutComponent, canActivateChild: [AuthGuard], children: [
      {path: 'extra', component: AboutExtraComponent}
    ]},
  {path: 'posts', component: PostsComponent, canActivate: [AuthGuard]},
  {
    path: 'posts/:id', // dynamic routing
    component: PostComponent,
    resolve: {
      post: PostResolver
    }
  },
  {path: 'error', component: ErrorPageComponent},
  {path: '**', redirectTo: '/error'} // !!! always in the END of routes list
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // for array routes registration
  exports: [RouterModule],
})

export class AppRoutingModule {

}


