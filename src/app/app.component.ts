import {Component, OnInit} from '@angular/core';

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
export class AppComponent implements OnInit {

  posts: Post[] = [
    { title: 'tra-ta-ta', text: 'text 1', id: 1 },
    { title: 'tra-ta-ta-NEXT', text: 'text 2', id: 2 },
    { title: 'kukuruku-ku', text: 'text 3', id: 3 },
  ];

  updatePosts(post: Post) {
    this.posts.unshift(post);
    console.log('Post', post);
  }

  removePost(id: number) {
    this.posts = this.posts.filter(p => p.id !== id);
  }

  ngOnInit(): void {
    setTimeout(() => {
      console.log('Timeout');
      // this.posts[0].title = 'Changed!';
      this.posts[0] = {
        title: 'changed title',
        text: 'changed text',
        id: 777
      };
    }, 5000);
  }
}
