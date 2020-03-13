import {
  AfterContentInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef, EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit, Output,
  SimpleChanges
} from '@angular/core';
import {Post} from '../app.component';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements
  OnInit, OnChanges, DoCheck, AfterContentInit, OnDestroy {

  @Input() post: Post;
  @Output() postOnRemove = new EventEmitter<number>();
  @ContentChild('info', {static: true}) infoRef: ElementRef;
  constructor() {
    console.log('!!! constructor !!!');
  }

  ngOnInit(): void {
    // console.log('Look Here !!!');
    // console.log(this.infoRef.nativeElement);
    console.log('ngOnInit');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes);
  }
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  removePost() {
    this.postOnRemove.emit(this.post.id);
  }
}
