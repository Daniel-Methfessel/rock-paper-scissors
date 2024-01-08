import { Component, Input, OnInit, Signal, computed, signal } from '@angular/core';
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
  @Input({ required: true }) public isPlayer!: boolean

  private readonly isClickable = signal(false)
  public readonly cssClass: Signal<string>
  public readonly hideImage: Signal<boolean>
  public readonly label: Signal<string>
  public readonly source: Signal<string>

  private readonly handKey = new Map<Hand, string>([
    [Hand.Rock, '1'],
    [Hand.Paper, '2'],
    [Hand.Scissors, '3']
  ])

  constructor() {
    this.cssClass = computed(() => this.isClickable() ? 'clickable' : 'choosen')
    this.hideImage = computed(() => !this.hand())

    this.label = computed(() => {
      const hand = this.hand()
      return hand ? this.isClickable()
        ? _(`${hand?.toString()} (press '${this.handKey.get(hand)}')`)
        : _(hand?.toString())
        : ''
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
    // It is not computed.
    // TODO: could of course have an explicit flag for it...
    this.isClickable.set(this.isPlayer)
  }
}
