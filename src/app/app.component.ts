import { Component } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('box', [
      state('start', style({
          background: '#00aba9'
        })),
      state('end', style({
        background: '#da532c',
        transform: 'scale(1.2)'
      })),
      state('special', style({
        background: '#ffc40d',
        transform: 'scale(0.7)',
        borderRadius: '50%'
      })),
      transition('start => end', animate(450)),
      transition('end => start', animate('800ms ease-in-out')),
      transition('special <=> *', [
        style({ background: '#99b433' }),
        animate('1s', style({
          background: '#7e3878'
        })),
        animate(750)
      ]),
      /* void - is reserved for NO-state
      * 'void => *' = ':enter'
      * '* => void' = ':leave'
      * */
      transition(':enter', [
        style({opacity: 0}),
        animate('777ms ease-out')
      ]),
      transition(':leave', [
        style({opacity: 1}),
        animate(500, style({
          opacity: 0,
          transform: 'scale(1.3)'
        }))
      ])
    ])
  ]
})
export class AppComponent {
  boxState = 'start';
  visible = true;

  animate() {
    this.boxState = this.boxState === 'end' ? 'start' : 'end';
  }
}
