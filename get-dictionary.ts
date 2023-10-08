import 'server-only'
import type { Locale } from './i18n-config'

const dictionaries = {
  cs: async () => (await import('./langs/cs')).cs,
  en: async () => (await import('./langs/en')).en,
  de: async () => (await import('./langs/de')).de
}

export const getDictionary = async (locale: Locale) =>
  dictionaries[locale]?.() ?? dictionaries.en()