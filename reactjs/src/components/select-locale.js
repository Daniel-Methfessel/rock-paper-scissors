import { useTranslation } from 'react-i18next';

import './select-locale.scss';
import { useEffect } from 'react';

export default function SelectLocale() {
    const { i18n } = useTranslation();

    const locale = window.localStorage.getItem('language')

    useEffect(() => {
        if (locale) { i18n.changeLanguage(locale) }
    },
        [i18n, locale])

    const langs = [
        { locale: 'en', title: 'English' },
        { locale: 'de', title: 'Deutsch' },
        { locale: 'fr', title: 'Français' }
    ]

    const options = langs.map(lang => (
        <option key={lang.locale} value={lang.locale}>
            {lang.title}
        </option>
    ))

    const onChange = function (element) {
        const locale = element?.target?.value
        i18n.changeLanguage(locale)
        window.localStorage.setItem('language', locale)
    }

    return (
        <div className="locale-changer">
            <select onChange={onChange} value={locale}>
                {options}
            </select>
        </div>
    )
}
