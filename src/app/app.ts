import {Component} from '@angular/core';
import * as ons from 'onsenui';
import {FishListComponent} from './fish-list/fish-list.component';

@Component({
  selector: 'app',
  template: require('./app.html'),
  styles: [ require('./app.css') ]
})
export class MyApp {
  constructor() {}

  alert() {
    ons.notification.alert('This is an Onsen UI alert notification.');
  }
}
