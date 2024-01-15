<script setup lang="ts">
import SelectLocale from '../components/SelectLocale.vue';
</script>

<template>
    <div class="content">
        <header>
            <h1>{{ $t('Rock, paper, scissors') }}</h1>

            <SelectLocale />
        </header>

        <p>{{ $t('A rock-paper-scissors game against a computer opponent.') }}</p>

        <a href="/play" class="start-game">{{ $t('Play!') }}</a>

        <div class="alternatives">
            <h2>{{ $t('Alternative frontend frameworks') }}</h2>

            <p>{{ $t('Why alternative frameworks.') }}</p>

            <ol>
                <li><a href="https://blazor.rock-paper-scissors.dame-software.com/">Blazor.js</a></li>
                <li><a href="https://angular.rock-paper-scissors.dame-software.com/">Angular</a></li>
                <li><a href="https://react.rock-paper-scissors.dame-software.com/">React.js</a></li>
            </ol>
        </div>

        <div class="sources">
            <h2>{{ $t('References') }}</h2>

            <ol>
                <li><a href="https://github.com/elsehow/aaronson-oracle">{{
                    $t('Concept') }}</a>
                    ({{ $t('Thanks to') }}
                    <a href="https://www.linkedin.com/in/harald-meyer-auf-m-hofe-00934a116/">Harald</a>
                    {{ $t('for the suggestion.') }})
                </li>
                <li><a href="https://openclipart.org/detail/325645/hands-3">{{
                    $t('Source of the hand images.') }}</a></li>
                <li><a href="https://github.com/Daniel-Methfessel/rock-paper-scissors/tree/master/vue">{{
                    $t('GitHub repository for the source code of this page.') }}</a></li>
                <li><a :href="'http://www.DaMe-Software.' + $t('com')">{{
                    $t('My website.') }}</a></li>
            </ol>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../border';

.content {
    padding: 0.5em;
    max-width: 30em;
    margin: 0 auto;
}

header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media (orientation:portrait) {
        font-size: smaller;
    }
}

.start-game {
    display: block;
    width: fit-content;
    margin: 1em auto;
    padding: 0.5em 1em;
    background-color: palegreen;
    color: inherit;
    text-decoration: none;
    font-size: 2em;
    font-weight: bold;

    @include border.button;
    border-width: 0.1em;
    border-color: palegreen;
    border-radius: 0.4em;

    @media (prefers-color-scheme:dark) {
        background-color: green;
    }
}
</style>
