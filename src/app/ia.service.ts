import { Injectable } from '@angular/core';

export type ChoiceType = 'paper' | 'rock' | 'scissors';
export type MatchOutcomeType = 'won' | 'lose' | 'draw';

@Injectable({
  providedIn: 'root'
})
export class IAService {

  private comparisons = {
    paper: 'scissors' as ChoiceType,
    rock: 'paper' as ChoiceType,
    scissors: 'rock' as ChoiceType
  };

  private winFactor = 3;
  private _playerScore = 0;
  private _iaScore = 0;

  constructor() { }

  get playerScore(): number { return this._playerScore; }
  get iaScore(): number { return this._iaScore; }

  choose(): ChoiceType {
    return ['paper', 'rock', 'scissors'][
      Math.floor(Math.random() * Math.floor(3))
    ] as ChoiceType;
  }
  won(player: ChoiceType, ia: ChoiceType): MatchOutcomeType {
    if (player === ia) { return 'draw'; }
    if (this.comparisons[ia] === player) {
      this._playerScore += 1;
      return 'won';
    }
    this._iaScore += 1;
    return 'lose';
  }
  check() {
    if (this._playerScore === this.winFactor) {
      return 'won';
    } else if (this._iaScore === this.winFactor) {
      return 'lose';
    }
  }
  playAgain() {
    this._iaScore = 0;
    this._playerScore = 0;
  }
}
