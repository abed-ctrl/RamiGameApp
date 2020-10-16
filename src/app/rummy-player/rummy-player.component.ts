import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rummy-player',
  templateUrl: './rummy-player.component.html',
  styleUrls: ['./rummy-player.component.scss'],
})
export class RummyPlayerComponent {
  nbrPlayers: number = 0;
  namePlayer1: string = '';
  namePlayer2: string = '';
  namePlayer3: string = '';
  playersName: string[] = [];

  reset() {
    this.nbrPlayers = 0;
    this.playersName = [];
  }

  addPlayersNames(nbrPlayers)
  {
    if (nbrPlayers == 2 && this.namePlayer1 != '' && this.namePlayer2 != '') {
      this.playersName.push(this.namePlayer1);
      this.playersName.push(this.namePlayer2);
      this.namePlayer1 = '';
      this.namePlayer2 = '';
      
    } else if (
      nbrPlayers == 3 &&
      this.namePlayer1 != '' &&
      this.namePlayer2 != '' &&
      this.namePlayer3 != '')
    {
      this.playersName.push(this.namePlayer1);
      this.playersName.push(this.namePlayer2);
      this.playersName.push(this.namePlayer3);
      this.namePlayer1 = '';
      this.namePlayer2 = '';
      this.namePlayer3 = '';
    }
  }
}
