import {Component} from '@angular/core';

export interface Post {
  title: string;
  text: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: Post[] = [
    {title: 'Banana', text: 'Banana is yellow'},
    {title: 'Apple', text: 'Apple is red'},
    {title: 'Pie', text: 'Apple pie with banana'}
  ];

  search = '';
  searchField = 'title';

}
