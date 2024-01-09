<script setup lang="ts">
import { Hand } from '@/game/Hand';
import type { Ref } from 'vue';
import { computed } from 'vue'

const props = defineProps<{
    hand: Ref<Hand | undefined>,
    isPlayer: boolean
}>()

const isClickable = !props.isPlayer
const cssClass = isClickable ? 'clickable' : 'choosen'
const hideImage = computed(() => !props.hand.value)

const handKey = new Map<Hand, string>([
    [Hand.Rock, '1'],
    [Hand.Paper, '2'],
    [Hand.Scissors, '3']
])

const label = computed(() =>
    props.hand.value
        ? isClickable
            ? `${props.hand.value?.toString()} (press '${handKey.get(props.hand.value)}')`
            : props.hand.value?.toString()
        : '')

const source = computed(() => {
    switch (props.hand.value ?? '') {
        case Hand.Rock: return '/rock.svg?url'
        case Hand.Paper: return '/paper.svg?url'
        case Hand.Scissors: return '/scissors.svg?url'
        // need to return a value so :hidden takes space.
        default: return '/scissors.svg?url'
    }
})
</script>

<template>
    <img :class="cssClass" :style="hideImage ? 'visibility:hidden' : undefined" :src="source"
        :alt="label ? $t(label) : undefined" :title="label ? $t(label) : undefined" />
</template>

<style scoped lang="scss">
.choosen {
    display: block;
    max-width: 45vw;
    max-height: 60vh;
}

.clickable {
    display: block;
    max-width: 30vw;
    max-height: 40vh;

    @media (orientation:landscape) {
        flex-direction: column;
        max-height: calc(30vh - 6em);
    }
}
</style>