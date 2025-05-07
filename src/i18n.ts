import i18next from "i18next";
import ICU from "i18next-icu";
import {initReactI18next} from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./locales/en";
import fr from "./locales/fr";

i18next.use(ICU)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: "en",
        resources: {
            en,
            fr
        },
        interpolation: {
            escapeValue: false
        },
        partialBundledLanguages: true,
    });

export default i18next;