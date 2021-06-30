import Vue from 'vue';
import VueI18n from 'vue-i18n';
import cs from './locale/cs.json';
import de from './locale/de.json';
import en from './locale/en.json';
import fr from './locale/fr.json';
import ja from './locale/ja.json';
import ru from './locale/ru.json';
import pt from './locale/pt.json';
import sv from './locale/sv.json';
import tr from './locale/tr.json';

Vue.use(VueI18n);

const translations = { en, ja, fr, cs, de, ru, pt, sv, tr };

export const languages = [
    {
        text: 'English',
        value: 'en',
    },
    {
        text: 'Français',
        value: 'fr',
    },
    {
        text: 'čeština',
        value: 'cs',
    },
    {
        text: 'русский',
        value: 'ru',
    },
    {
        text: 'Português (Brasil)',
        value: 'pt',
    },
    {
        text: 'Deutsch',
        value: 'de',
    },
    {
        text: 'Svenska',
        value: 'sv',
    },
    {
        text: 'Türkçe',
        value: 'tr',
    },
    {
        text: '日本語',
        value: 'ja',
    },
];

export function checkLanguage(language) {
    return navigator.language.split('-')[0] === language.value;
}

if (!localStorage.getItem('language')) {
    localStorage.setItem(
        'language',
        languages.some(checkLanguage) ? navigator.language.split('-')[0] : 'en'
    );
}

export default new VueI18n({
    locale:
        localStorage.getItem('language') != null
            ? localStorage.getItem('language')
            : languages.some(checkLanguage)
            ? navigator.language.split('-')[0]
            : 'en',
    fallbackLocale: 'en',
    messages: translations,
});
