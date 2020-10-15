import { Player } from './../models/player';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rummy-player-item',
  templateUrl: './rummy-player-item.component.html',
  styleUrls: ['./rummy-player-item.component.scss'],
})
export class RummyPlayerItemComponent implements OnInit {
  @Input() nbrPlayers: number;
  players: Array<Player> = [];

  ngOnInit() {
    for (let index = 0; index < this.nbrPlayers; index++) {
      this.players.push({
        index: index,
        name: 'Player ' + (index + 1),
        score: 0,
        scoreArray: [],
        scoreTotal: 0,
      });
    }
  }

  onAddScore(indexOfPlayer)
  {
    // get the Score
    const score = Number(
      this.players.find((obj) => obj.index === indexOfPlayer).score
    );
    
    // add the Score to ScoreArray
    this.players
      .find((obj) => obj.index === indexOfPlayer)
      .scoreArray.push(score);
    
    // ScoreTotal
    this.players.find(
      (obj) => obj.index === indexOfPlayer
    ).scoreTotal = this.players
      .find((obj) => obj.index === indexOfPlayer)
        .scoreArray.reduce((acc, cur) => acc + cur, 0);
    
  }
}
