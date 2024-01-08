import { computed, ref, type Ref } from "vue"
import type { Hand } from "./Hand"

export class Player {
    public readonly hand = ref(undefined as Hand | undefined)

    public readonly score = ref(0)
    public readonly wonLastGame = ref(false)
    public readonly lostLastGame = ref(false)

    public readonly percentage: Ref<string>

    constructor(
        gamesPlayed: Ref<number>
    ) {
        this.percentage = computed(() =>
            gamesPlayed.value ? Math.round(this.score.value * 100 / gamesPlayed.value) + '%' : '0%')
    }

    public win() {
        ++this.score.value
        this.wonLastGame.value = true
        this.lostLastGame.value = false
    }

    public lose() {
        this.wonLastGame.value = false
        this.lostLastGame.value = true
    }

    public tie() {
        this.wonLastGame.value = false
        this.lostLastGame.value = false
    }
}