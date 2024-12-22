import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './locales/en/translation.json';
import jpTranslation from './locales/jp/translation.json';

i18n.use(initReactI18next).init({
  resources: {
    en: enTranslation,
    jp: jpTranslation,
  },
  lng: 'en',
  fallbackLng: 'en',
  ns: ['general', 'projects', 'gallery'],
  defaultNS: 'general',
  interpolation: {
    escapeValue: false,
  },
  returnObjects: true,
});

export default i18n;
