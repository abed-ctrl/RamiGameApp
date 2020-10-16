import { Player } from './../models/player';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rummy-player-item',
  templateUrl: './rummy-player-item.component.html',
  styleUrls: ['./rummy-player-item.component.scss'],
})
export class RummyPlayerItemComponent implements OnInit {
  @Input() nbrPlayers: number;
  @Input() playersName: string[] = [];
  players: Array<Player> = [];
  distribution: number;

  ngOnInit() {
    for (let index = 0; index < this.nbrPlayers; index++) {
      this.players.push({
        index: index,
        name: this.playersName[index],
        score: undefined,
        scoreArray: [],
        scoreTotal: 0,
        dist: false,
      });
    }
    this.players.find((obj) => obj.index === 0).dist = true;
  }

  onAddScore(indexOfPlayer) {

    if (this.players.find((obj) => obj.index === indexOfPlayer).score != undefined) {
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

      // Init
      this.players.find((obj) => obj.index === indexOfPlayer).score = undefined;

      // Dist 2
      if (
        this.players.find((obj) => obj.index === indexOfPlayer + 1) &&
        this.nbrPlayers == 2
      ) {
        if (
          this.players.find((obj) => obj.index === indexOfPlayer).dist == false
        ) {
          this.players.find((obj) => obj.index === indexOfPlayer).dist = true;
          this.players.find(
            (obj) => obj.index === indexOfPlayer + 1
          ).dist = false;
        } else {
          this.players.find((obj) => obj.index === indexOfPlayer).dist = false;
          this.players.find(
            (obj) => obj.index === indexOfPlayer + 1
          ).dist = true;
        }
      } else {
        if (
          this.players.find((obj) => obj.index === indexOfPlayer).dist == false
        ) {
          this.players.find((obj) => obj.index === indexOfPlayer).dist = true;
          this.players.find((obj) => obj.index === 0).dist = false;
        } else {
          this.players.find((obj) => obj.index === indexOfPlayer).dist = false;
          this.players.find((obj) => obj.index === 0).dist = true;
        }
      }

    }
    
  }
}
