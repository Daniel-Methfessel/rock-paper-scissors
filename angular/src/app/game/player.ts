import { Signal, computed, signal } from "@angular/core"
import type { Hand } from "./hand"

export class Player {
    public readonly hand = signal(undefined as Hand | undefined)

    public readonly score = signal(0)
    public readonly wonLastGame = signal(false)
    public readonly lostLastGame = signal(false)

    public readonly percentage: Signal<string>

    constructor(
        gamesPlayed: Signal<number>
    ) {
        this.percentage = computed(() =>
            gamesPlayed() ? Math.round(this.score() * 100 / gamesPlayed()) + '%' : '0%')
    }

    public win() {
        this.score.set(this.score() + 1)
        this.wonLastGame.set(true)
        this.lostLastGame.set(false)
    }

    public lose() {
        this.wonLastGame.set(false)
        this.lostLastGame.set(true)
    }

    public tie() {
        this.wonLastGame.set(false)
        this.lostLastGame.set(false)
    }
}