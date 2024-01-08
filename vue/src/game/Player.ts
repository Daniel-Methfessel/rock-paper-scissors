import { computed, ref, type Ref } from "vue"
import type { Hand } from "./Hand"

export class Player {
    public readonly hand = ref(undefined as Hand | undefined)

    public readonly score = ref(0)

    public readonly percentage: Ref<string>

    constructor(
        gamesPlayed: Ref<number>
    ) {
        this.percentage = computed(() =>
            gamesPlayed.value ? Math.round(this.score.value * 100 / gamesPlayed.value) + '%' : '0%')
    }
}