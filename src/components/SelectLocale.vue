<script setup lang="ts">
</script>

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
        return { langs: [
            {locale:'en', title:'English'},
             {locale:'de', title:'Deutsch'},
             {locale: 'fr', title:'Français'}
            ] }
    }
}
</script>