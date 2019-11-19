import { Component } from '@angular/core';
import { trigger, 
         state, 
         style, 
         transition, 
         animate 
        } from '@angular/animations';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  animations: [
    trigger('divState', [
      state('normal', style({
        'background-color': 'blue',
        transform: 'translateX(0)'
      })),
      state('highlighted', style({
        'background-color': 'red',
        transform: 'translateX(100px)'
      })),
      transition('normal <=> highlighted', animate(300)),
      // transition('highlighted => normal', animate(600))
    ]),
    trigger('wildState', [
      state('normal', style({
        'background-color': 'blue',
        transform: 'translateX(0) scale(1)'
      })),
      state('highlighted', style({
        'background-color': 'red',
        transform: 'translateX(100px) scale(1)'
      })),
      state('shrinken', style({
        'background-color': 'green',
        transform: 'translateX(0) scale(0.5)'
      })),
      transition('normal => highlighted', animate(300)),
      transition('highlighted => normal', animate(800)),
      transition('shrinken <=> *', [
        style({
            'background-color': 'orange', borderRadius: '0' 
        }), 
        animate(1000, style({
          borderRadius: '50px'
        })),
        animate(500)
      ])
    ])
  ]
})
export class AppComponent  {
  state = 'normal';
  wildState = 'normal';

  onAnimate() {
    this.state == 'normal' ? this.state = 'highlighted' : this.state = 'normal';

    this.wildState == 'normal' ? this.wildState = 'shrinken' : this.wildState = 'normal';
  }

  onShrink() {
    this.wildState = 'shrinken'
  }
}
