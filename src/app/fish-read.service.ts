import { Injectable } from '@angular/core';
import { FishInfo } from './fish-info';

@Injectable({
  providedIn: 'root'
})
export class FishReadService {

  constructor() { }

  // fish.jsonから魚種データを読み込む
  public read(): FishInfo[] {

    var fishinfo: Array<FishInfo> = new Array(3);
    fishinfo[0] = new FishInfo(100, "チヌ");
    fishinfo[1] = new FishInfo(200, "グレ");
    fishinfo[2] = new FishInfo(300, "シーバス");
    return fishinfo; 
  }
  
}
