<script setup lang="ts">
import { Hand } from "../game/Hand";
import PlayerHand from "../components/PlayerHand.vue"
import TheChoice from "../components/TheChoice.vue"
import { Game } from "../game/Game";

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
            <PlayerHand :player="gameState.human" />
            <PlayerHand :player="gameState.robot" />
        </div>

        <TheChoice @click-hand="onClick($event)" />
    </div>
</template>

<style scoped lang="scss">
.content {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin: 0 auto;
    max-width: 100%;

    @media (orientation:portrait) {
        flex-direction: column;
        gap: 5vh;
    }
}

.result {
    display: flex;
    flex-direction: row;
    gap: min(1vh, 1vw);
    justify-content: space-evenly;
    max-width: 100%;
    margin-top: min(2vw, 2vh);

    @media (orientation:landscape) {
        max-height: 100%;
        vertical-align: center;
    }
}
</style>