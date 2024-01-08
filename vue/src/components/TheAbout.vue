<script setup lang="ts">
import SelectLocale from './SelectLocale.vue';
</script>

<template>
    <header>
        <h1>{{ $t('Rock, paper, scissors') }}</h1>

        <SelectLocale />
    </header>

    <p>TODO: decription</p>

    <a href="/play">{{ $t('Play!') }}</a>

    <!--
        TODO: footer stuff:
        * image reference
        * idea reference
        https://github.com/elsehow/aaronson-oracle
        * licensing
        * source code
        * my website
    -->
</template>

<style scoped lang="scss">
header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0.2em;

    @media (orientation:portrait) {
        font-size: smaller;
    }
}
</style>
