import en from "./assets/i18n/en.json";
import de from "./assets/i18n/de.json";
import fr from "./assets/i18n/fr.json";
import { createI18n } from 'vue-i18n';

const messages = {
    en,
    de,
    fr
}

// see https://github.com/lokalise/lokalise-tutorials/

const storedLocale = window.localStorage.getItem('language')?.substring(0, 2)
const locale = storedLocale && 0 <= Object.keys(messages).indexOf(storedLocale)
    ? storedLocale : navigator.language.substring(0, 2)
    
export const i18n = createI18n({
    locale: locale,
    fallbackLocale: 'en',
    messages,
    legacy: false,
    globalInjection: true,
    runtimeOnly: false,
    sync: true,
})


