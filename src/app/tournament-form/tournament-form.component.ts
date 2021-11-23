import { Component, OnInit } from '@angular/core';
import { ServerAccessService } from '../service/server-access.service';
import axios from 'axios';

@Component({
  selector: 'app-tournament-form',
  template: require('./tournament-form.component.html'),
  styles: [ require('./tournament-form.component.css') ]
})
export class TournamentFormComponent implements OnInit {

  constructor(private serverAccessService: ServerAccessService) { }

  ngOnInit(): void {
  }

  tournamentCreate(): void {


  }

}
