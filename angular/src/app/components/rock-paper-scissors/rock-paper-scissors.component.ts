import { Component, HostListener } from '@angular/core';
import { Game } from '../../game/game';
import { Hand } from '../../game/hand';
import { PlayerHandComponent } from '../player-hand/player-hand.component';
import { TheChoiceComponent } from '../the-choice/the-choice.component';

@Component({
  selector: 'app-rock-paper-scissors',
  standalone: true,
  imports: [
    PlayerHandComponent,
    TheChoiceComponent
  ],
  templateUrl: './rock-paper-scissors.component.html',
  styleUrl: './rock-paper-scissors.component.scss'
})
export class RockPaperScissorsComponent {
  public readonly gameState = new Game()

  constructor() {

  }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    switch (event.key) {
      case '1':
        this.gameState.play(Hand.Rock)
        break
      case '2':
        this.gameState.play(Hand.Paper)
        break
      case '3':
        this.gameState.play(Hand.Scissors)
        break
    }
  }
}
