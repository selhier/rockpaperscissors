import { Component, OnInit } from '@angular/core';
import { ChoiceType, MatchOutcomeType, IAService } from 'src/app/ia.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  selected: ChoiceType;
  iaChoice: ChoiceType;
  outcome: MatchOutcomeType;
  gameOver: string;

  constructor(private iaService: IAService) {}

  ngOnInit() { }

  get playerScore(): number {
    return this.iaService.playerScore;
  }
  get iaScore(): number {
    return this.iaService.iaScore;
  }

  onSelected(choice: ChoiceType): void {
    if (!!this.selected) {
      return;
    }

    this.selected = choice;
    this.iaChoice = this.iaService.choose();
    this.outcome = this.iaService.won(this.selected, this.iaChoice);
    this.gameOver = this.iaService.check();

  }
  displayMessage() {
    if (!!this.gameOver) {
      return {
        won: 'Congratulations',
        lose: 'Game Over'
      }[this.gameOver];
    }

    return {
      won: 'You Won',
      lose: 'You Lose',
      draw: 'Draw'
    }[this.outcome];
  }

  retry() {
    if (!!this.gameOver) {
      this.iaService.playAgain();
    }

    this.selected = undefined;
    this.iaChoice = undefined;
  }
}
