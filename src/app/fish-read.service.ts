import { Injectable } from '@angular/core';
import { FishInfo } from './fish-info';
import { FishData } from './fish-data/fish-data';

@Injectable({
  providedIn: 'root'
})
export class FishReadService {

  constructor() { }

  // FishDataから魚種データを読み込む
  public read(): FishInfo[] {
    var fishinfo: Array<FishInfo> = new Array(FishData.datas.length);
    FishData.datas.forEach(fish => {
      fishinfo.push(new FishInfo(fish.id, fish.name));
    })
    return fishinfo; 
  }
  
}
