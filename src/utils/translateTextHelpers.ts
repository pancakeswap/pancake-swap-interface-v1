import { useContext } from 'react'
import { TranslationsContext } from '../hooks/TranslationsContext'

export const getTranslation = (translations: Array<any>, translationId: number, fallback: string) => {
  const foundTranslation = translations.find(translation => {
    return translation.data.stringId === translationId
  })
  if (foundTranslation) {
    return foundTranslation.data.text
  } else {
    return fallback
  }
}

export const TranslateString = (translationId: number, fallback: string) => {
  const { translations } = useContext(TranslationsContext)
  if (translations[0] === 'error') {
    return fallback
  } else {
    return getTranslation(translations, translationId, fallback)
  }
}
