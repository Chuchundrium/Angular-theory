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
    this.service.fetch().subscribe(p => {
      this.posts = p;
    });
  }

  add(title: string) {
    const post = { title };
    this.service.create(post).subscribe(p => {
      this.posts.push(p);
    }, error => this.message = error);
  }

  delete(id) {
    if (window.confirm('Are you sure?')) {
      this.service.remove(id).subscribe();
    }
  }
}
