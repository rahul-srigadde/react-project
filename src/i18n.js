import i18n from 'i18next';
import translationEN from './locales/en/en.json';
import translationFR from './locales/fr/fr.json';
import translationJP from './locales/fr/fr.json';
import translationPT from './locales/fr/fr.json';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: translationEN
  },
  fr: {
    translation: translationFR
  },
  jp:{
    translation: translationJP
  },
  pt:{
    translation: translationPT
  }
};

const languageDetectionOptions = {
// order and from where user language should be detected
  order: ['navigator', 'querystring', 'cookie', 'localStorage', 'htmlTag'],

// keys or params to lookup language from
  lookupQuerystring: 'lng',
  lookupCookie: 'i18next',
  lookupLocalStorage: 'i18nextLng',

// cache user language on
  caches: ['localStorage', 'cookie'],

// optional expire and domain for set cookie
  cookieMinutes: 10,
  cookieDomain: '.lab.net',

// optional htmlTag with lang attribute, the default is:
  htmlTag: document.documentElement
};

const options = {
  interpolation: {
    escapeValue: false, // not needed for react!!
  },
  debug: true,
  //lng: 'fr', // should not be set while detecting language. window.navigator.language can be used but trying to use detector
  resources: resources,
  fallbackLng: 'en',
  detection: languageDetectionOptions,
  react: {
    transEmptyNodeValue: '',
    wait: true,
    bindI18n: 'languageChanged loaded',
    bindStore: 'added removed',
    nsMode: 'default',
    transSupportBasicHtmlNodes: false,
    useSuspense: false,
  },
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init(options);

export default i18n;