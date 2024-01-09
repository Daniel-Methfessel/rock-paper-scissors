<script setup lang="ts">
</script>

<style lang="scss">select {
    display: block;
    font-size: 1.5em;
    height: 2em;
}
</style>

<!-- https://kazupon.github.io/vue-i18n/guide/locale.html -->
<template>
    <div class="locale-changer">
        <select v-model="$i18n.locale">
            <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang.locale">
                {{ lang.title }}
            </option>
        </select>
    </div>
</template>
  
<script lang="js">
export default {
    name: 'locale-changer',
    data() {
        return {
            langs: [
                { locale: 'en', title: 'English' },
                { locale: 'de', title: 'Deutsch' },
                { locale: 'fr', title: 'Français' }
            ]
        }
    }
}
</script>

