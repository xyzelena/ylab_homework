import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import resources from './locales/index.js';

import App from './components/App/App.js';

const init = async () => {
    const defaultLng = 'ru';

    const i18n = i18next.createInstance();

    await i18n
        .use(initReactI18next)
        .use(LanguageDetector)
        .init({
            fallbackLng: defaultLng,
            debug: false,
            resources,
            interpolation: {
                escapeValue: false,
            },
        });

    return (
        <App />
    );
};

export default init;

