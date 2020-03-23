import { Component, OnInit } from '@angular/core';
import {transition, trigger, useAnimation} from '@angular/animations';

/* npm i ng-animate --save */
import {bounce, bounceOutUp} from 'ng-animate';

@Component({
  selector: 'app-animate',
  template: `
    <button class="btn" (click)="visible = !visible">Visibility</button>
    <hr>
    <div [@bounce] class="rectangle" *ngIf="visible"></div>
    `,
  styleUrls: ['./animate.component.scss'],
  animations: [
    trigger('bounce', [
      transition('void => *', useAnimation(bounce)),
      transition('* => void', useAnimation(bounceOutUp), {
        params: {
          timing: 3,
          delay: 0.3
        }
      })
    ])
  ]
})
export class AnimateComponent implements OnInit {
  visible = true;

  constructor() { }

  ngOnInit(): void {
  }

}
