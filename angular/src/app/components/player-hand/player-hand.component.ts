import { Component, Input, Signal, computed } from '@angular/core';
import { Player } from '../../game/player';
import { HandImageComponent } from '../hand-image/hand-image.component';

@Component({
  selector: 'app-player-hand',
  standalone: true,
  imports: [
    HandImageComponent
  ],
  templateUrl: './player-hand.component.html',
  styleUrl: './player-hand.component.scss'
})
export class PlayerHandComponent {
  @Input({ required: true }) public player!: Player

  public readonly cssClass: Signal<string | undefined>

  constructor() {
    this.cssClass = computed(() => {
      const wonLastGame = this.player.wonLastGame()
      const lostLastGame = this.player.lostLastGame()
      return wonLastGame ? 'winner'
        : lostLastGame ? 'loser'
          : 'tie'
    })
  }
}
