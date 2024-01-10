import type { Hand } from "./hand"

type GetGamesPlayed = () => number

export class Player {
    public hand = undefined as Hand | undefined

    public score = 0
    public wonLastGame = false
    public lostLastGame = false

    public percentage(): string {
        return this.gamesPlayed() ? Math.round(this.score * 100 / this.gamesPlayed()) + '%' : '0%'
    }

    constructor(
        private readonly gamesPlayed: GetGamesPlayed
    ) {
    }

    public win() {
        ++this.score
        this.wonLastGame = true
        this.lostLastGame = false
    }

    public lose() {
        this.wonLastGame = false
        this.lostLastGame = true
    }

    public tie() {
        this.wonLastGame = false
        this.lostLastGame = false
    }
}