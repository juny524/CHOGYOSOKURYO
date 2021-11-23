import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ServerAccessService {

  constructor() { }

  public tournament_create(): void{
    const data = {
      name : 'firstTest',
      species : 1,
      rule : 1
    };
  


  }

}
