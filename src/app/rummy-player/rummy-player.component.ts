import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rummy-player',
  templateUrl: './rummy-player.component.html',
  styleUrls: ['./rummy-player.component.scss']
})
export class RummyPlayerComponent{

  nbrPlayers: number = 0;

  reset()
  {
    this.nbrPlayers = 0;
  }

}
