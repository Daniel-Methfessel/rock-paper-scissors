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
        <HandImage :hand="ref(Hand.Rock)" @click="onClick(Hand.Rock)" />
        <HandImage :hand="ref(Hand.Paper)" @click="onClick(Hand.Paper)" />
        <HandImage :hand="ref(Hand.Scissors)" @click="onClick(Hand.Scissors)" />
    </div>
</template>

<style scoped lang="scss">
.choice {
    display: flex;
    flex-direction: row;
    gap: 1em;
    justify-content: space-around;
    max-width: 100%;

    @media (orientation:landscape) {
        flex-direction: column;
    }
}
</style>