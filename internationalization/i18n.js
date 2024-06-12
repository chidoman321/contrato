import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en.json"; // Archivo de traducción en inglés
import es from "./locales/es.json"; // Archivo de traducción en español

const resources = {
  en: {
    translation: en,
  },
  es: {
    translation: es,
  },
};

i18n.use(initReactI18next).init({
  compatibilityJSON: "v3",
  resources,
  lng: "es", // Idioma predeterminado
  fallbackLng: "en", // Idioma de respaldo en caso de que no se encuentre una traducción
  interpolation: {
    escapeValue: false, // No necesitas escapar los valores traducidos
  },
});

export default i18n;
