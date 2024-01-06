<script setup lang="ts">
import RockPaperScissors from './components/RockPaperScissors.vue'
import SelectLocale from './components/SelectLocale.vue';
</script>

<template id="app">
  <header>
    <h1>{{ $t( 'appTitle' ) }}</h1>

    <SelectLocale />
  </header>

  <main>
    <RockPaperScissors />
  </main>
</template>

<style scoped>
/* TODO:
  landscape: choice on the right.
  portrait: choice on the bottom.
 */
</style>
