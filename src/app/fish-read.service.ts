import { Injectable } from '@angular/core';
import { FishInfo } from './fish-info';

@Injectable({
  providedIn: 'root'
})
export class FishReadService {

  private fishdatas = [
    {
      "id": 100,
      "name": "チヌ"
    },
    {
      "id": 200,
      "name": "グレ"
    },
    {
      "id": 300,
      "name": "シーバス"
    },
    {
      "id": 400,
      "name": "マダイ"
    },
    {
      "id": 500,
      "name": "青物"
    },
    {
      "id": 600,
      "name": "タチウオ"
    }
  ];

  constructor() { }

  // fish.jsonから魚種データを読み込む
  public read(): FishInfo[] {

    var fishinfo: Array<FishInfo> = new Array(this.fishdatas.length);
    this.fishdatas.forEach(fish => {
      fishinfo.push(new FishInfo(fish.id, fish.name));
    })
    return fishinfo; 
  }
  
}
