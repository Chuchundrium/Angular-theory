import { Component } from '@angular/core';

export interface Post {
  title: string;
  text: string;
  id?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  posts: Post[] = [
    { title: 'tra-ta-ta', text: 'text 1', id: 1 },
    { title: 'tra-ta-ta-NEXT', text: 'text 2', id: 2 },
    { title: 'kukuruku-ku', text: 'text 3', id: 3 },
  ];

}
