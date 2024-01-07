<script setup lang="ts">
import { Hand } from "@/game/Hand";
import PlayerHand from "./PlayerHand.vue"
import TheChoice from "./TheChoice.vue"
import { Game } from "@/game/Game";

const gameState = new Game()
const onClick = function (hand: Hand) {
    gameState.play(hand)
}

const onKey = function (event: KeyboardEvent) {
    switch (event.key) {
        case '1':
            onClick(Hand.Rock)
            break
        case '2':
            onClick(Hand.Paper)
            break
        case '3':
            onClick(Hand.Scissors)
            break
    }
}

document.addEventListener('keypress', onKey)

</script>

<template>
    <div class="content">
        <div class="result">
            <PlayerHand v-bind:player="gameState.human" />
            <PlayerHand v-bind:player="gameState.robot" />
        </div>

        <TheChoice @click-hand="onClick($event)" />

    </div>
</template>

<style scoped lang="scss">
.content {
    display: flex;
    flex-direction: row;
    gap: 1em;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 100%;

    @media (orientation:portrait) {
        flex-direction: column;
    }
}

.result {
    display: flex;
    flex-direction: row;
    gap: 1em;
    justify-content: space-around;
    max-width: 100%;

    @media (orientation:landscape) {
        max-height: calc(100vh - 6em);
        max-width: 85%;
    }
}
</style>@/game/Game