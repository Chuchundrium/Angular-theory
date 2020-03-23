import { Component } from '@angular/core';
import {animate, group, keyframes, query, state, style, transition, trigger} from '@angular/animations';

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
        group([
          query('h4', animate(1500, style({
            fontSize: '.5rem'
          }))),
          style({ background: '#99b433' }),
          animate('1s', style({
            background: '#7e3878'
          })),
          animate(750)
        ])
      ]),
      transition(':enter', [
        // style({opacity: 0}),
        // animate('777ms ease-out')
        animate('4s', keyframes([
          style({background: '#b91d47', offset: 0}),
          style({background: '#1d1d1d', offset: 0.2}),
          style({background: '#e3a21a', offset: 0.3}),
          style({background: '#2b5797', offset: 1}),
        ]))
      ]),
      transition(':leave', [
        style({opacity: 1}),
        group([
          animate(800, style({
            opacity: 0,
            transform: 'scale(1.3)'
          })),
          animate(300, style({
            color: '#1d1d1d',
            fontWeight: 'bold'
          }))
        ])
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

  animationStarted(event: AnimationEvent) {
    console.log('animation started', event);
  }

  animationDone(event: AnimationEvent) {
    console.log('animation done', event);
  }
}
