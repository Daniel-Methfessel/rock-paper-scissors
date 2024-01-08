<script setup lang="ts">
import { computed } from "vue";
import HandImage from "./HandImage.vue"
import type { Player } from "@/game/Player";

const props = defineProps<{
    player: Player,
}>()

const cssClass = computed(() => {
    const wonLastGame = props.player.wonLastGame.value
    const lostLastGame = props.player.lostLastGame.value
    return wonLastGame ? 'winner'
        : lostLastGame ? 'loser'
            : 'tie'
})
</script>

<template>
    <div class="player">
        <HandImage :class="cssClass" :hand="props.player.hand" />
        <p class="score">{{ player.percentage.value }}</p>
    </div>
</template>

<style scoped lang="scss">
.player {
    position: relative;
}

.winner {
    background-color: hsl(120, 93%, 90%);
}

.loser {
    background-color: hsl(340, 57%, 90%);
}

.tie {
    background-color: hsl(0, 0%, 90%);
}

.score {
    text-align: center;
    position: absolute;
    left: 40%;
    top: 10vh;
    font-size: 3em;
}
</style>