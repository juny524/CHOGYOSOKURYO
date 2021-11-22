import {
  OnsLazyRepeat,
  ViewChild,
  OnsenModule,
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA
} from 'ngx-onsenui';
import { Component, OnInit } from '@angular/core';
import { FishReadService } from '../fish-read.service';
import { FishInfo } from '../fish-info';

@Component({
  selector: 'app-fish-list',
  template: require('./fish-list.component.html'),
  styles: [ require('./fish-list.component.css') ]
})
export class FishListComponent implements OnInit {
  public fishlist: any[] = new Array();

  constructor(private fishReadService: FishReadService) { }

  ngOnInit(): void {
    this.fishRead();
  }

  // fish read から魚種データ取得
  private fishRead(): void{
    var fishInfoArray:Array<FishInfo> = this.fishReadService.read();
    fishInfoArray.forEach(fish => {
      this.fishlist.push(fish.name);
    });

  }

}
