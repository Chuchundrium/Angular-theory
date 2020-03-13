import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  arr = [1, 1, 2, 3, 5, 13];

  objs = [
    {title: 'Post 1', author: 'Chu', comments: [
        {name: 'Bu', text: 'ta-1'},
        {name: 'Ru', text: 'ta-2'},
        {name: 'Ku', text: 'ta-3'},
      ]},
    {title: 'Post 2', author: 'ChuChu', comments: [
        {name: 'Bu', text: 'ta-1'},
        {name: 'Ru', text: 'ta-2'},
        {name: 'Ku', text: 'ta-3'},
      ]},
  ];
}
