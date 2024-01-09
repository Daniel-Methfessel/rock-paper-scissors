<script setup lang="ts">
import { ref } from 'vue';
import HandImage from './HandImage.vue'
import { Hand } from '@/game/Hand'

const emit = defineEmits<{
    (e: 'clickHand', hand: Hand): void
}>()

function onClick(hand: Hand): void { emit('clickHand', hand) }
</script>

<template>
    <div class="choice">
        <HandImage class="hand" :hand="ref(Hand.Rock)" @click="onClick(Hand.Rock)" :isPlayer="false" />
        <HandImage class="hand" :hand="ref(Hand.Paper)" @click="onClick(Hand.Paper)" :isPlayer="false" />
        <HandImage class="hand" :hand="ref(Hand.Scissors)" @click="onClick(Hand.Scissors)" :isPlayer="false" />
    </div>
</template>

<style scoped lang="scss">
.choice {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

    @media (orientation:landscape) {
        flex-direction: column;
        height: 100vh;
    }

    @media (orientation:portrait) {
        width: 100vw;
    }

    .hand {
        border: min(1vh, 1vw) outset;
        border-radius: min(5vh, 5vw);
    }

    .hand:hover,
    .hand:active {
        border-style: inset;
    }
}
</style>