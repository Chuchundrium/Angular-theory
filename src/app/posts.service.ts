import { Injectable } from '@angular/core';

export interface Post {
  title: string;
  text: string;
  id: number;
}
@Injectable({
  providedIn: 'root'
})
export class PostsService {
  posts: Post[] = [
    {title: 'Post 1', text: 'text 1', id: 1},
    {title: 'Post 2', text: 'text 2', id: 2},
    {title: 'Post 3', text: 'text 3', id: 3},
    {title: 'Post 4', text: 'text 4', id: 4},
  ];

  constructor() { }

  getById(id: number) {
    return this.posts.find(post => post.id === id);
  }
}
