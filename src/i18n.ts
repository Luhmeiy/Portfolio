import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import PTBR from "../public/locales/pt/pt-br.json";
import ENUS from "../public/locales/en/en-us.json";

const resources = {
	'pt-BR': PTBR,
	'en-us': ENUS
}

i18n
	.use(Backend)
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources,
		debug: true,
		fallbackLng: { 
			'pt': ['pt-BR'],
			'default': ['en']
		},
		saveMissing: true,
		interpolation: {
			escapeValue: false
		}
	})

export default i18n;
