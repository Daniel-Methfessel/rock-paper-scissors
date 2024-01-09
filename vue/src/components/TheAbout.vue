<script setup lang="ts">
import SelectLocale from './SelectLocale.vue';
</script>

<template>
    <div class="content">
        <header>
            <h1>{{ $t('Rock, paper, scissors') }}</h1>

            <SelectLocale />
        </header>

        <p>{{ $t('A rock-paper-scissors game against a computer opponent.') }}</p>

        <a href="/play">{{ $t('Play!') }}</a>

        <div class="alternatives">
            <h2>{{ $t('Alternative frontend frameworks') }}</h2>

            <p>{{ $t('Why alternative frameworks.') }}</p>

            <ol>
                <li><a href="../angular/">Angular</a></li>
                <li><a href="../blazor/">Blazor</a></li>
                <li><a href="../react/">React.js</a></li>
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
                    $t('OpenClipArt.org: Source of the hand images.') }}</a></li>
                <li><a href="https://github.com/Daniel-Methfessel/rock-paper-scissors/tree/master/vue">{{
                    $t('GitHub repository for the source code of this page.') }}</a></li>
                <li><a :href="$t('http://www.DaMe-Software.com')">{{
                    $t('My website.') }}</a></li>
            </ol>
        </div>
    </div>
</template>

<style scoped lang="scss">
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
</style>
