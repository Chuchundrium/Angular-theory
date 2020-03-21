import {Component, OnInit} from '@angular/core';
import {PostsService} from './posts.service';

@Component({
  template: `Post component`,
  selector: 'app-posts'
})
export class PostsComponent implements OnInit {
  posts = [];
  message = '';

  constructor(private service: PostsService) {}

  ngOnInit(): void {
    this.service.fetch().subscribe(posts => {
      this.posts = posts;
    });
  }

  add(title: string) {
    const post = { title };
    this.service.create(post).subscribe(() => {
      this.posts.push(post);
    }, error => this.message = error);
  }

  delete(id) {
    if (window.confirm('Are you sure?')) {
      this.service.remove(id).subscribe();
    }
  }
}
