import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './translations/en'
import es from './translations/es'
import fr from './translations/fr'
import { I18nManager } from 'react-native'
import { getLocales } from 'react-native-localize'

i18next.use(initReactI18next).init({
	fallbackLng: 'en',
	lng: getLocales()[0].languageCode,
	resources: {
		en,
		es,
		fr,
	},
})

export const changeLanguage = async (language: string) => {
	try {
		await i18next.changeLanguage(language)
		const isRTL = language === 'ar'
		I18nManager.allowRTL(isRTL)
		I18nManager.forceRTL(isRTL)
	} catch (error) {
		console.error('Error changing language:', error)
	}
}

export default i18next
