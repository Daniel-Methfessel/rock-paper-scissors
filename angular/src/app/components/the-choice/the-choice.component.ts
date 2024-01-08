import { Component, EventEmitter, Output, Signal, signal } from '@angular/core';
import { Hand } from '../../game/hand';
import { HandImageComponent } from '../hand-image/hand-image.component';

@Component({
  selector: 'app-the-choice',
  standalone: true,
  imports: [
    HandImageComponent
  ],
  templateUrl: './the-choice.component.html',
  styleUrl: './the-choice.component.scss'
})
export class TheChoiceComponent {
  @Output('click-hand') public readonly clickHand = new EventEmitter<Hand>()

  public hands = Hand

  public onClick(hand: Hand): void { this.clickHand.emit(hand) }

  public dummy(hand: Hand): Signal<Hand> { return signal(hand) }
}
