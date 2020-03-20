import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, Params, Router} from '@angular/router';
import {Post, PostsService} from '../posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  post: Post;

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    // this.post = this.route.snapshot.data.post; // static
    this.route.data.subscribe(data => {      // dynamic
      this.post = data.post;
    });
  }

  loadPost() {
    this.router.navigate(['/posts', 4]).then();
  }
}
