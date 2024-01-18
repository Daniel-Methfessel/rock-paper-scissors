import { Component, Input, OnInit, Signal, booleanAttribute, computed, signal } from '@angular/core';
import { Hand } from '../../game/hand';
import { marker as _ } from '@biesbjerg/ngx-translate-extract-marker';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-hand-image',
  standalone: true,
  imports: [
    TranslateModule
  ],
  templateUrl: './hand-image.component.html',
  styleUrl: './hand-image.component.scss'
})
export class HandImageComponent implements OnInit {
  @Input({ required: true }) public hand!: Signal<Hand | undefined>
  @Input({ transform: booleanAttribute }) public isPlayer!: boolean

  private readonly isClickable = signal(false)
  public readonly cssClass: Signal<string>
  public readonly hideImage: Signal<boolean>
  public readonly label: Signal<string>
  public readonly source: Signal<string>

  constructor() {
    this.cssClass = computed(() => this.isClickable() ? 'clickable' : 'choosen')
    this.hideImage = computed(() => !this.hand())

    this.label = computed(() => {
      const hand = this.hand()

      if (!hand) { return '' }

      if (!this.isClickable()) { return hand.toString() }

      switch (hand) {
        case Hand.Rock:
          return "rock (press '1')"
        case Hand.Paper:
          return "paper (press '2')"
        case Hand.Scissors:
          return "scissors (press '3')"
        default:
          return ''
      }
    })

    this.source = computed(() => {
      switch (this.hand() ?? '') {
        case Hand.Rock: return '/assets/rock.svg'
        case Hand.Paper: return '/assets/paper.svg'
        case Hand.Scissors: return '/assets/scissors.svg'
        // need to return a value so :hidden takes space.
        default: return '/assets/scissors.svg'
      }
    })
  }

  ngOnInit(): void {
    // Know only on OnInit the initial value of the hand.
    this.isClickable.set(!this.isPlayer)
  }
}
