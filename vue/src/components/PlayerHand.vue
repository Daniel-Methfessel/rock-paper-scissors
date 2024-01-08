<script setup lang="ts">
import HandImage from "./HandImage.vue"
import type { Player } from "@/game/Player";

const props = defineProps<{
    player: Player,
}>()
</script>

<template>
    <div class="player">
        <HandImage v-bind:hand="props.player.hand" />
        <p class="score">{{ player.percentage.value }}</p>
    </div>
</template>

<style scoped lang="scss">
.player {
    display: flex;
    flex-direction: column;
}

.score {
    text-align: center;
}
</style>