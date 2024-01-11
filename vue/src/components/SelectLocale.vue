<script setup lang="ts">
const langs = [
    { locale: 'en', title: 'English' },
    { locale: 'de', title: 'Deutsch' },
    { locale: 'fr', title: 'Français' }
]

const onChange = (locale: string) => {
    window.localStorage.setItem('language', locale)
}
</script>

<style lang="scss">
select {
    display: block;
    font-size: 1.5em;
    height: 2em;

    @media (prefers-color-scheme:dark) {
        color: #fff;
        background-color: #000;
    }
}
</style>

<template>
    <div class="locale-changer">
        <select v-model="$i18n.locale" :onchange="onChange($i18n.locale)">
            <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang.locale">
                {{ lang.title }}
            </option>
        </select>
    </div>
</template>