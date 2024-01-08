import { Signal, computed, signal } from "@angular/core"
import type { Hand } from "./hand"

export class Player {
    public readonly hand = signal(undefined as Hand | undefined)

    public readonly score = signal(0)

    public readonly percentage: Signal<string>

    constructor(
        gamesPlayed: Signal<number>
    ) {
        this.percentage = computed(() =>
            gamesPlayed() ? Math.round(this.score() * 100 / gamesPlayed()) + '%' : '0%')
    }
}