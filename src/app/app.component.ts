import { Component } from '@angular/core';
import { trigger, state, style } from '@angular/animations';

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
      }))
    ])
  ]
})
export class AppComponent  {
  state = 'normal';
  name = 'Angular';
}
