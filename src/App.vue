<script setup lang="ts">
import TheRockPaperScissors from './components/TheRockPaperScissors.vue'
import SelectLocale from './components/SelectLocale.vue';
</script>

<template id="app">
  <header>
    <h1>{{ $t('appTitle') }}</h1>

    <SelectLocale />
  </header>

  <main>
    <TheRockPaperScissors />
  </main>

<footer>
    <!--
        TODO: footer stuff:
        * image reference
        * idea reference
        * licensing
        * source code
        * my website
    -->
</footer>
</template>

<style scoped lang="scss">
header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding:0.2em;

  @media (orientation:portrait) {
    font-size: smaller;
  }
}
</style>
