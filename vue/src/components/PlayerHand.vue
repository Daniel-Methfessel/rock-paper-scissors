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
        <div :class="cssClass">
            <HandImage :hand="props.player.hand" :isPlayer="true" />
        </div>
        <p class="score">{{ player.percentage.value }}</p>
    </div>
</template>

<style scoped lang="scss">
.player {
    position: relative;
}

.winner {
    background-color: hsl(120, 93%, 90%);
    border: min(1vh, 1vw) outset hsl(120, 93%, 90%);
    border-radius: min(5vh, 5vw);

    @media (prefers-color-scheme:dark) {
        background-color: hsl(120, 93%, 10%);
    }
}

.loser {
    background-color: hsl(340, 57%, 90%);
    border: min(1vh, 1vw) outset hsl(340, 57%, 90%);
    border-radius: min(5vh, 5vw);

    @media (prefers-color-scheme:dark) {
        background-color: hsl(340, 57%, 10%);
    }
}

.tie {
    background-color: hsl(0, 0%, 90%);
    border: min(1vh, 1vw) outset hsl(0, 0%, 90%);
    border-radius: min(5vh, 5vw);

    @media (prefers-color-scheme:dark) {
        background-color: hsl(0, 0%, 10%);
    }
}

.score {
    display: block;
    text-align: center;
    position: absolute;
    left: 0;
    right: 0;
    top: 40vh;
    font-size: 3em;

    @media (orientation:portrait) {
        top: 15vh;
    }

    @media (prefers-color-scheme:dark) {
        color: #000;
    }
}
</style>