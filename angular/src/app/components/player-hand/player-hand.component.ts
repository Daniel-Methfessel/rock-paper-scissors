import { Component, Input } from '@angular/core';
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
}
